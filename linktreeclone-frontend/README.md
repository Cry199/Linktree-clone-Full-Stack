# Linktree Clone Frontend

Este repositório contém o código-fonte do frontend de uma aplicação Linktree Clone, desenvolvida para gerenciar e exibir múltiplos links de forma centralizada. Este projeto é parte de uma solução full-stack, com o backend gerenciando a lógica de negócios e persistência de dados, e o frontend oferecendo uma interface de usuário interativa e responsiva.

## Tecnologias Utilizadas

O frontend foi construído utilizando as seguintes tecnologias:

*   **React**: Uma biblioteca JavaScript para construção de interfaces de usuário.
*   **Vite**: Um bundler de próxima geração para desenvolvimento web, oferecendo uma experiência de desenvolvimento extremamente rápida.
*   **Axios**: Um cliente HTTP baseado em Promises para fazer requisições a APIs.
*   **React Router DOM**: Para roteamento declarativo no React.
*   **Vitest**: Um framework de teste rápido para projetos baseados em Vite.
*   **ESLint**: Para garantir a qualidade do código e padronização.


## Funcionalidades

O frontend do Linktree Clone oferece as seguintes funcionalidades:

*   **Autenticação de Usuário**: Registro e login de usuários para acesso seguro.
*   **Dashboard Administrativo**: Área protegida onde os usuários podem gerenciar seus links.
*   **Criação e Edição de Links**: Adicione, edite e remova links facilmente.
*   **Perfis Públicos Personalizáveis**: Cada usuário tem um perfil público único com seus links.
*   **Visualização Responsiva**: Design adaptável para diferentes tamanhos de tela (desktop e mobile).
*   **Integração com API**: Comunicação com o backend para persistência e recuperação de dados.

## Estrutura do Projeto

A estrutura de diretórios do projeto é organizada da seguinte forma:

```
linktreeclone-frontend/
├── public/
│   └── favicon.png
├── src/
│   ├── api/
│   ├── assets/
│   ├── components/
│   │   └── ProtectedRoute.jsx
│   ├── context/
│   ├── features/
│   │   ├── auth/
│   │   ├── dashboard/
│   │   ├── home/
│   │   └── publicProfile/
│   ├── routes/
│   │   └── index.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── setupTests.js
├── .dockerignore
├── .gitignore
├── Dockerfile
├── eslint.config.js
├── index.html
├── nginx.conf
├── package-lock.json
├── package.json
├── vite.config.js
└── README.md
```

*   `public/`: Contém arquivos estáticos como o `favicon.png`.
*   `src/`: Contém o código-fonte principal da aplicação React.
    *   `api/`: Módulos para interação com a API de backend.
    *   `assets/`: Para imagens, ícones e outros recursos estáticos.
    *   `components/`: Componentes React reutilizáveis, como `ProtectedRoute.jsx`.
    *   `context/`: Contextos React para gerenciamento de estado global.
    *   `features/`: Módulos que representam funcionalidades específicas da aplicação (e.g., autenticação, dashboard, perfil público).
    *   `routes/`: Contém a configuração de roteamento da aplicação.
    *   `App.css`: Estilos CSS para o componente principal da aplicação.
    *   `App.jsx`: Componente raiz da aplicação.
    *   `index.css`: Estilos globais da aplicação.
    *   `main.jsx`: Ponto de entrada da aplicação React.
    *   `setupTests.js`: Configuração para testes (e.g., Vitest).
*   `Dockerfile`: Define o ambiente Docker para a aplicação frontend.
*   `nginx.conf`: Configurações do Nginx para servir a aplicação estática.
*   `package.json`: Lista as dependências do projeto e scripts de build/execução.
*   `vite.config.js`: Configurações do Vite.

## Instalação e Execução

Para configurar e executar o projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/Cry199/Linktree-clone-Full-Stack.git
    cd Linktree-clone-Full-Stack/linktreeclone-frontend
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Execute a aplicação em modo de desenvolvimento:**

    ```bash
    npm run dev
    ```

    A aplicação estará disponível em `http://localhost:5173` (ou outra porta, conforme indicado pelo Vite).

4.  **Construa a aplicação para produção:**

    ```bash
    npm run build
    ```

    Os arquivos estáticos otimizados serão gerados na pasta `dist/`.

## Testes

Para executar os testes unitários do projeto, utilize o comando:

```bash
npm run test
```

## Implantação com Docker e Nginx

O projeto inclui um `Dockerfile` e uma configuração `nginx.conf` para facilitar a implantação em um ambiente de contêiner.

1.  **Construa a imagem Docker:**

    ```bash
    docker build -t linktree-clone-frontend .
    ```

2.  **Execute o contêiner Docker:**

    ```bash
    docker run -p 80:80 linktree-clone-frontend
    ```

    A aplicação estará acessível em `http://localhost`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## Autor

Cry199