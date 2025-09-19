import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPublicProfile } from '../api/publicProfileApi';

const PublicProfilePage = () => {
  const { username } = useParams();

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const response = await getPublicProfile(username);
        setProfile(response.data);
      } catch (err) {
        setError(`Perfil "${username}" não encontrado.`);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [username]);

  if (loading) {
    return <div>Carregando perfil...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  return (
    <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
      {/* Aqui você adicionaria a imagem de perfil */}
      {/* <img src={profile.profileImageUrl} alt="Foto de Perfil" /> */}
      
      <h2>{profile.profileTitle || profile.username}</h2>
      <p>{profile.bio}</p>

      <div>
        {profile.links && profile.links.map(link => (
          <a 
            key={link.id} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'block',
              backgroundColor: 'lightblue',
              color: 'black',
              padding: '15px',
              margin: '15px 0',
              textDecoration: 'none',
              borderRadius: '5px',
              fontWeight: 'bold'
            }}
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default PublicProfilePage;