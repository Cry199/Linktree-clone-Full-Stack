import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const AdminDashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>
      <h1>Dashboard do Administrador</h1>
      <p>Você está logado! Esta página é protegida.</p>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
};

export default AdminDashboard;