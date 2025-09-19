import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { getUserLinks, createLink, deleteLink, updateLink } from '../api/linksApi';
import { getMe, updateMyProfile } from '../../auth/api/authApi';

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
      const profileData = { profileTitle, bio };
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
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Meu Painel</h1>
        <button onClick={handleLogout}>Sair</button>
      </header>
      <hr />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* --- EDIÇÃO DE PERFIL --- */}
      <section>
        <h2>Meu Perfil</h2>
        <form onSubmit={handleProfileUpdate}>
          <div>
            <label>Título do Perfil:</label>
            <input
              type="text"
              placeholder="Ex: Bem-vindo à minha página!"
              value={profileTitle}
              onChange={(e) => setProfileTitle(e.target.value)}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ marginTop: '10px' }}>
            <label>Bio:</label>
            <textarea
              placeholder="Fale um pouco sobre você..."
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows="3"
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>
          <button type="submit" style={{ marginTop: '10px' }}>Salvar Perfil</button>
        </form>
        {profileMessage && <p style={{ color: profileMessage.includes('Erro') ? 'red' : 'green' }}>{profileMessage}</p>}
      </section>

      <section>
        <h2>Criar Novo Link</h2>
        <form onSubmit={handleCreateLink}>
          <input type="text" placeholder="Título" value={newLinkTitle} onChange={(e) => setNewLinkTitle(e.target.value)} />
          <input type="url" placeholder="URL" value={newLinkUrl} onChange={(e) => setNewLinkUrl(e.target.value)} />
          <button type="submit">Adicionar Link</button>
        </form>
      </section>
      <hr />
      <section>
        <h2>Meus Links</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {links.length > 0 ? (
          <ul>
            {links.map((link) => (
              <li key={link.id} style={{ marginBottom: '15px' }}>
                {/* --- LÓGICA DE RENDERIZAÇÃO CONDICIONAL --- */}
                {editingLink && editingLink.id === link.id ? (
                  // Se o link atual for o que está sendo editado, mostra o formulário
                  <form onSubmit={handleUpdateLink}>
                    <input
                      type="text"
                      value={editingLink.title}
                      onChange={(e) => setEditingLink({ ...editingLink, title: e.target.value })}
                    />
                    <input
                      type="url"
                      value={editingLink.url}
                      onChange={(e) => setEditingLink({ ...editingLink, url: e.target.value })}
                    />
                    <button type="submit">Salvar</button>
                    <button type="button" onClick={() => setEditingLink(null)}>Cancelar</button>
                  </form>
                ) : (
                  // Caso contrário, mostra o link normalmente com os botões
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{link.title}: {link.url}</span>
                    <div>
                      <button onClick={() => handleEditClick(link)}>Editar</button>
                      <button onClick={() => handleDeleteLink(link.id)}>Apagar</button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>Você ainda não tem links. Crie um acima!</p>
        )}
      </section>
    </div>
  );
};

export default AdminDashboard;