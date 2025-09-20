import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../api/authApi';
import './AuthForm.css';

const SignupPage = () => {
  const navigate = useNavigate();
  
  // Estados para controlar os campos do formulário
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Estados para feedback ao usuário
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!username || !email || !password) {
      setError('Todos os campos são obrigatórios.');
      return;
    }

    try {
      const userData = { username, email, password };
      await signup(userData);
      
      setSuccess('Cadastro realizado com sucesso! Você será redirecionado para o login.');
      
      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (err) {
      setError('Erro ao realizar o cadastro. O nome de usuário ou e-mail pode já estar em uso.');
      console.error(err);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Criar Conta</h2>
        <div className="form-group">
          <label>Nome de Usuário:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Senha:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="auth-button">Cadastrar</button>
      </form>

      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      
      <p className="auth-switch-link">
        Já tem uma conta? <Link to="/login">Faça o login</Link>
      </p>
    </div>
  );
};


export default SignupPage;