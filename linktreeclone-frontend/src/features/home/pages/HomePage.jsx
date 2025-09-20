import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-container">
            <img src="/logo.png" alt="Logo do Site" className="home-logo" />
            <h1 className="home-title">Todos os seus links em um só lugar.</h1>
            <p className="home-subtitle">
                Crie uma página personalizada para agrupar todos os seus links importantes e compartilhe com um único link. Simples, rápido e grátis.
            </p>
            
            <div className="home-cta-container">
                <Link to="/signup" className="home-cta-button primary">
                    Criar minha página
                </Link>
                <Link to="/login" className="home-cta-button secondary">
                    Entrar
                </Link>
            </div>

            <footer className="home-footer">
                <p>
                    Este projeto é feito como material de estudo por {' '}
                    <a href="https://github.com/Cry199" target="_blank" rel="noopener noreferrer">
                        Cry199
                    </a>
                    .
                </p>
                <p>
                    Link do Repositório: {' '}
                    <a href="https://github.com/Cry199/Linktree-clone-Full-Stack" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </p>
            </footer>
        </div>
    );
};

export default HomePage;