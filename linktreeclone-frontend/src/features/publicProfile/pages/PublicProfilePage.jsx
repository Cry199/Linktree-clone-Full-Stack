import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPublicProfile } from '../api/publicProfileApi';
import './PublicProfilePage.css';

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
        <div className="profile-container">
            {/* Renderiza a imagem apenas se a URL existir */}
            {profile.profileImageUrl && (
                <img
                    src={profile.profileImageUrl}
                    alt="Foto de Perfil"
                    className="profile-image"
                />
            )}

            <h2 className="profile-title">{profile.profileTitle || profile.username}</h2>
            <p className="profile-bio">{profile.bio}</p>

            <div className="links-container">
                {profile.links && profile.links.map(link => (
                    <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="profile-link"
                    >
                        {link.title}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default PublicProfilePage;