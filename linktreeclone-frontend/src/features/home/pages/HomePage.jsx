import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import IconShowcase from '../../../components/IconShowcase/IconShowcase';
import { checkApiStatus } from '../../../api/statusApi';
import './HomePage.css';

const HomePage = () => {
    const [apiStatus, setApiStatus] = useState('checking'); // 'checking', 'ok', 'error'
    const [statusMessage, setStatusMessage] = useState('Verificando status do servidor...');

    useEffect(() => {
        const getStatus = async () => {
            try {
                const response = await checkApiStatus();
                if (response.data.api_status === 'ok' && response.data.database_status === 'ok') {
                    setApiStatus('ok');
                    setStatusMessage('Servidor online!');
                } else {
                    setApiStatus('error');
                    setStatusMessage('Servidor com instabilidade. Tente novamente mais tarde.');
                }
            } catch (error) {
                setApiStatus('error');
                setStatusMessage('Servidor offline. Por favor, tente mais tarde.');
                console.error("API Status Check Failed:", error);
            }
        };

        getStatus();
    }, []); 

    const isApiReady = apiStatus === 'ok';

    return (
        <div className="home-container">
            <img src="/logo.png" alt="Logo do Site" className="home-logo" />
            <h1 className="home-title">Todos os seus links em um só lugar.</h1>
            <p className="home-subtitle">
                Crie uma página personalizada para agrupar todos os seus links importantes e compartilhe com um único link. Simples, rápido e grátis.
            </p>

            <div className="home-cta-container">
                <Link 
                    to={isApiReady ? "/signup" : "#"} 
                    className={`home-cta-button primary ${!isApiReady && 'disabled'}`}
                    style={{ pointerEvents: !isApiReady ? 'none' : 'auto' }} // Impede o clique
                >
                    Criar minha página
                </Link>
                <Link 
                    to={isApiReady ? "/login" : "#"} 
                    className={`home-cta-button secondary ${!isApiReady && 'disabled'}`}
                    style={{ pointerEvents: !isApiReady ? 'none' : 'auto' }}
                >
                    Entrar
                </Link>
            </div>

            <div className="api-status-indicator" style={{ color: isApiReady ? 'var(--success-color)' : 'var(--secondary-text-color)' }}>
                {statusMessage}
            </div>

            <IconShowcase />

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