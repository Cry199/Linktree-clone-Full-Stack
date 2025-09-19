import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { getUserLinks, createLink, deleteLink, updateLink } from '../api/linksApi';

const AdminDashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [links, setLinks] = useState([]);
  const [newLinkTitle, setNewLinkTitle] = useState('');
  const [newLinkUrl, setNewLinkUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [editingLink, setEditingLink] = useState(null);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await getUserLinks();
        setLinks(response.data);
      } catch (err) {
        setError('Não foi possível carregar os links.');
      } finally {
        setLoading(false);
      }
    };
    fetchLinks();
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