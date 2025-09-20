import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { getUserLinks, createLink, deleteLink, updateLink } from '../api/linksApi';
import { getMe, updateMyProfile } from '../../auth/api/authApi';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  // Estados para gerenciamento de Links
  const [links, setLinks] = useState([]);
  const [newLinkTitle, setNewLinkTitle] = useState('');
  const [newLinkUrl, setNewLinkUrl] = useState('');
  const [editingLink, setEditingLink] = useState(null);

  // Estados para gerenciamento de Perfil
  const [profileTitle, setProfileTitle] = useState('');
  const [bio, setBio] = useState('');
  const [profileImageUrl, setProfileImageUrl] = useState('');
  const [profileMessage, setProfileMessage] = useState('');

  // Estados de UI
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        // Busca os links e os dados do perfil em paralelo
        const [linksResponse, meResponse] = await Promise.all([
          getUserLinks(),
          getMe()
        ]);

        setLinks(linksResponse.data);
        setProfileTitle(meResponse.data.profileTitle || '');
        setBio(meResponse.data.bio || '');
        setProfileImageUrl(meResponse.data.profileImageUrl || '');

      } catch (err) {
        setError('Não foi possível carregar os dados.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  const handleCreateLink = async (e) => {
    e.preventDefault();
    if (!newLinkTitle || !newLinkUrl) return;
    try {
      const newLinkData = { title: newLinkTitle, url: newLinkUrl };
      const response = await createLink(newLinkData);
      setLinks([...links, response.data]);
      setNewLinkTitle('');
      setNewLinkUrl('');
    } catch (err) {
      setError('Erro ao criar o link.');
    }
  };
  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setProfileMessage('');
    try {
      const profileData = { profileTitle, bio, profileImageUrl };
      await updateMyProfile(profileData);
      setProfileMessage('Perfil atualizado com sucesso!');
    } catch (err) {
      setProfileMessage('Erro ao atualizar o perfil.');
      console.error(err);
    }
  };

  const handleDeleteLink = async (linkId) => {
    if (window.confirm('Tem certeza que deseja apagar este link?')) {
      try {
        await deleteLink(linkId);
        setLinks(links.filter((link) => link.id !== linkId));
      } catch (err) {
        setError('Erro ao apagar o link.');
      }
    }
  };

  const handleEditClick = (link) => {
    setEditingLink({ ...link });
  };

  const handleUpdateLink = async (e) => {
    e.preventDefault();
    try {
      await updateLink(editingLink.id, { title: editingLink.title, url: editingLink.url });

      setLinks(links.map(link => link.id === editingLink.id ? editingLink : link));

      setEditingLink(null);
    } catch (err) {
      setError('Erro ao atualizar o link.');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (loading) return <div>Carregando...</div>;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Meu Painel</h1>
        <button onClick={handleLogout}>Sair</button>
      </header>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <section className="dashboard-section">
        <h2>Meu Perfil</h2>
        <form onSubmit={handleProfileUpdate} className="dashboard-form">
          <input type="text" placeholder="Título do Perfil" value={profileTitle} onChange={(e) => setProfileTitle(e.target.value)}/>
          <textarea placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)} rows="3"/>
          <input type="url" placeholder="URL da Imagem de Perfil" value={profileImageUrl} onChange={(e) => setProfileImageUrl(e.target.value)}/>
          <button type="submit">Salvar Perfil</button>
        </form>
        {profileMessage && <p style={{ color: profileMessage.includes('Erro') ? 'red' : 'green' }}>{profileMessage}</p>}
      </section>

      <section className="dashboard-section">
        <h2>Meus Links</h2>
        <form onSubmit={handleCreateLink} className="dashboard-form">
          <input type="text" placeholder="Título do Link" value={newLinkTitle} onChange={(e) => setNewLinkTitle(e.target.value)} />
          <input type="url" placeholder="URL do Link" value={newLinkUrl} onChange={(e) => setNewLinkUrl(e.target.value)} />
          <button type="submit">Adicionar Link</button>
        </form>
        
        <ul className="link-list">
          {links.map((link) => (
            <li key={link.id}>
              {editingLink && editingLink.id === link.id ? (
                <form onSubmit={handleUpdateLink} className="edit-form">
                  <input type="text" value={editingLink.title} onChange={(e) => setEditingLink({ ...editingLink, title: e.target.value })}/>
                  <input type="url" value={editingLink.url} onChange={(e) => setEditingLink({ ...editingLink, url: e.target.value })}/>
                  <div>
                    <button type="submit">Salvar</button>
                    <button type="button" onClick={() => setEditingLink(null)}>Cancelar</button>
                  </div>
                </form>
              ) : (
                <div className="link-item">
                  <span>{link.title}</span>
                  <div className="link-item-actions">
                    <button onClick={() => handleEditClick(link)}>Editar</button>
                    <button onClick={() => handleDeleteLink(link.id)}>Apagar</button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AdminDashboard;