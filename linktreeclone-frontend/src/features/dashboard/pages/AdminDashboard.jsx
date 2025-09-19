import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
// Importa as funções da API de links que acabamos de definir
import { getUserLinks, createLink, deleteLink } from '../api/linksApi';

const AdminDashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  // --- Estados do Componente ---
  const [links, setLinks] = useState([]);
  const [newLinkTitle, setNewLinkTitle] = useState('');
  const [newLinkUrl, setNewLinkUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // --- Busca de Dados ---
  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await getUserLinks(); 
        setLinks(response.data);
      } catch (err) {
        setError('Não foi possível carregar os links.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLinks();
  }, []);

  // --- Funções de Manipulação (Handlers) ---
  const handleCreateLink = async (e) => {
    e.preventDefault();
    if (!newLinkTitle || !newLinkUrl) {
      alert('Por favor, preencha o título e a URL.');
      return;
    }

    try {
      const newLinkData = { title: newLinkTitle, url: newLinkUrl };
      const response = await createLink(newLinkData); 
      setLinks([...links, response.data]);
      setNewLinkTitle('');
      setNewLinkUrl('');
    } catch (err) {
      setError('Erro ao criar o link.');
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
        console.error(err);
      }
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // --- Renderização ---
  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Meu Painel</h1>
        <button onClick={handleLogout}>Sair</button>
      </header>
      
      <hr />

      <section>
        <h2>Criar Novo Link</h2>
        <form onSubmit={handleCreateLink}>
          <input
            type="text"
            placeholder="Título (ex: Meu Portfólio)"
            value={newLinkTitle}
            onChange={(e) => setNewLinkTitle(e.target.value)}
          />
          <input
            type="url"
            placeholder="URL (ex: https://...)"
            value={newLinkUrl}
            onChange={(e) => setNewLinkUrl(e.target.value)}
          />
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
              <li key={link.id} style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
                <span>{link.title}: {link.url}</span>
                <button onClick={() => handleDeleteLink(link.id)}>Apagar</button>
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