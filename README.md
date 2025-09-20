# Linktree Clone - Full Stack

Este projeto é uma implementação completa de um clone do Linktree, oferecendo uma solução full-stack para que usuários possam criar e gerenciar suas próprias páginas personalizadas com uma coleção de links. A aplicação é dividida em um backend robusto desenvolvido com Spring Boot e Java 17, e um frontend interativo construído com React e TypeScript. O objetivo é proporcionar uma plataforma segura, escalável e de fácil uso para compartilhar múltiplos links através de uma única URL.

## Links da Aplicação Online

Você pode acessar as versões online do backend e frontend do Linktree Clone através dos seguintes links:

*   **Backend (API)**: [https://linktree-clone-api-faw777jkuq-rj.a.run.app](https://linktree-clone-api-faw777jkuq-rj.a.run.app/swagger-ui/index.html)
*   **Frontend (Interface do Usuário)**: [https://linktree-frontend-faw777jkuq-rj.a.run.app](https://linktree-frontend-faw777jkuq-rj.a.run.app)


## Funcionalidades

O Linktree Clone Full Stack oferece um conjunto abrangente de funcionalidades, combinando a robustez do backend com a interatividade do frontend:

### Funcionalidades do Backend (API RESTful)

*   **Autenticação e Autorização Segura**: Sistema completo de registro e login de usuários com JWT (JSON Web Tokens) para proteger as requisições à API.
*   **Gerenciamento Completo de Usuários**: CRUD (Create, Read, Update, Delete) para perfis de usuários, com senhas criptografadas.
*   **Gestão Dinâmica de Links**: Usuários autenticados podem adicionar, editar, excluir e listar seus links personalizados.
*   **Perfis Públicos Acessíveis**: Acesso a perfis de links publicamente via nome de usuário, sem autenticação.
*   **Tratamento de Exceções Global**: Respostas HTTP padronizadas e informativas para erros.
*   **Configuração CORS Flexível**: Suporte a Cross-Origin Resource Sharing para integração com o frontend.

### Funcionalidades do Frontend (Interface do Usuário)

*   **Interface Intuitiva**: Design limpo e responsivo para fácil navegação e gerenciamento de links.
*   **Criação e Edição de Perfil**: Usuários podem personalizar seu perfil e adicionar/remover links de forma dinâmica.
*   **Visualização Pública de Links**: Páginas de perfil público acessíveis para qualquer pessoa, exibindo os links configurados.
*   **Autenticação de Usuário**: Formulários de login e registro para acesso seguro à plataforma.
*   **Experiência do Usuário Aprimorada**: Feedback visual e interações fluidas para uma experiência agradável.




## Tecnologias Utilizadas

O projeto Linktree Clone Full Stack foi construído com uma combinação de tecnologias modernas para garantir robustez, escalabilidade e uma experiência de usuário rica:

### Backend

*   **Java 17**: Versão LTS do Java, oferecendo performance e funcionalidades otimizadas.
*   **Spring Boot**: Framework líder para desenvolvimento de aplicações Java, simplificando a configuração e o deploy de microsserviços e APIs RESTful.
*   **Spring Security**: Para autenticação e autorização, incluindo a proteção de rotas com JWT.
*   **Spring Data JPA**: Facilita a interação com bancos de dados relacionais, utilizando Hibernate como provedor JPA padrão.
*   **Maven**: Ferramenta de automação de build e gerenciamento de projetos.
*   **H2 Database**: Banco de dados relacional em memória, ideal para desenvolvimento e testes.
*   **JWT (JSON Web Tokens)**: Padrão para autenticação stateless e segura.
*   **Docker**: Para conteinerização e garantia de um ambiente consistente.

### Frontend

*   **React**: Biblioteca JavaScript para construção de interfaces de usuário interativas.
*   **TypeScript**: Superset do JavaScript que adiciona tipagem estática, melhorando a manutenibilidade e a detecção de erros.
*   **Vite**: Ferramenta de build frontend de próxima geração, oferecendo um ambiente de desenvolvimento rápido.
*   **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva.
*   **React Router DOM**: Para gerenciamento de rotas na aplicação single-page.
*   **Axios**: Cliente HTTP baseado em Promises para fazer requisições à API do backend.




## Estrutura do Projeto

O projeto é organizado em dois diretórios principais, `linktreeclone-backend` e `linktreeclone-frontend`, refletindo a arquitetura full-stack. Cada diretório contém sua própria estrutura de projeto e dependências.

### `linktreeclone-backend`

O backend segue uma arquitetura em camadas bem definida, comum em aplicações Spring Boot, promovendo modularidade e separação de responsabilidades:

*   `br.com.linktreeclone.config`: Configurações globais da aplicação, incluindo segurança (Spring Security) e CORS.
*   `br.com.linktreeclone.controller`: Controladores RESTful que expõem os endpoints da API, lidando com requisições HTTP e delegando a lógica de negócios.
*   `br.com.linktreeclone.dto`: Data Transfer Objects (DTOs) para transferência de dados entre as camadas, evitando a exposição direta das entidades de domínio.
*   `br.com.linktreeclone.entity`: Entidades de domínio mapeadas para o banco de dados via JPA.
*   `br.com.linktreeclone.exception`: Classes de exceção personalizadas e um handler global para tratamento de erros padronizado.
*   `br.com.linktreeclone.repository`: Interfaces de repositório que estendem `JpaRepository` para operações CRUD e consultas ao banco de dados.
*   `br.com.linktreeclone.security`: Lógica de segurança, incluindo filtros JWT e serviço de token.
*   `br.com.linktreeclone.service`: Camada de serviço que implementa a lógica de negócios principal, orquestrando operações e interagindo com os repositórios.

### `linktreeclone-frontend`

O frontend é uma aplicação React organizada para facilitar o desenvolvimento e a manutenção:

*   `src/components`: Componentes React reutilizáveis.
*   `src/pages`: Páginas principais da aplicação (e.g., Login, Registro, Perfil do Usuário, Perfil Público).
*   `src/services`: Funções para interagir com a API do backend (e.g., requisições Axios).
*   `src/hooks`: Hooks personalizados para lógica de estado e efeitos colaterais.
*   `src/routes`: Configuração das rotas da aplicação usando React Router DOM.
*   `src/styles`: Arquivos de estilo, incluindo configurações do Tailwind CSS.




## Como Começar

Para configurar e executar o Linktree Clone Full Stack em seu ambiente local, siga as instruções abaixo para o backend e o frontend.

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

*   **Java Development Kit (JDK) 17 ou superior**: Necessário para o backend.
*   **Maven 3.x**: Ferramenta de gerenciamento de projetos para o backend.
*   **Node.js (versão LTS recomendada)**: Necessário para o frontend.
*   **npm ou Yarn**: Gerenciadores de pacotes para o frontend.
*   **Docker (opcional)**: Para conteinerização do backend.
*   **Git**: Para clonar o repositório.

### Configuração e Build do Backend

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/Cry199/Linktree-clone-Full-Stack.git
    cd Linktree-clone-Full-Stack
    ```

2.  **Navegue até o diretório do backend:**

    ```bash
    cd linktreeclone-backend
    ```

3.  **Compile o projeto com Maven:**

    ```bash
    mvn clean install
    ```

### Executando o Backend

Você pode executar o backend de duas maneiras:

#### 1. Via JAR Executável

```bash
java -jar target/linktreeclone-backend-0.0.1-SNAPSHOT.jar
```

#### 2. Via Docker

1.  **Construa a imagem Docker (no diretório `linktreeclone-backend`):**

    ```bash
    docker build -t linktreeclone-backend .
    ```

2.  **Execute o contêiner Docker:**

    ```bash
    docker run -p 8080:8080 linktreeclone-backend
    ```

Após a inicialização, a API estará acessível em `http://localhost:8080`.

### Configuração e Execução do Frontend

1.  **Navegue até o diretório do frontend (a partir da raiz do projeto clonado):**

    ```bash
    cd linktreeclone-frontend
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    # ou yarn install
    ```

3.  **Inicie a aplicação frontend:**

    ```bash
    npm run dev
    # ou yarn dev
    ```

O frontend estará acessível em `http://localhost:5173` (ou outra porta, dependendo da configuração do Vite).




## Endpoints da API (Backend)

A API RESTful do Linktree Clone Backend expõe os seguintes endpoints principais. Todos os endpoints protegidos requerem um JWT válido no cabeçalho `Authorization: Bearer <token>`.

### Autenticação

*   `POST /auth/login`: Autentica um usuário existente e retorna um JWT.
*   `POST /auth/register`: Registra um novo usuário.

### Usuários (Rotas Protegidas)

*   `GET /users/profile`: Retorna o perfil do usuário autenticado.
*   `PUT /users/profile`: Atualiza as informações do perfil do usuário autenticado.

### Links (Rotas Protegidas)

*   `GET /links`: Retorna todos os links do usuário autenticado.
*   `POST /links`: Adiciona um novo link ao perfil do usuário autenticado.
*   `PUT /links/{id}`: Atualiza um link existente pelo seu `id`.
*   `DELETE /links/{id}`: Exclui um link específico pelo seu `id`.

### Perfil Público (Rota Pública)

*   `GET /public/{username}`: Retorna o perfil público de um usuário específico, acessível sem autenticação.




## Contribuição

Contribuições são muito bem-vindas! Se você deseja aprimorar este projeto, adicionar novas funcionalidades, corrigir bugs ou melhorar a documentação, sinta-se à vontade para contribuir. Por favor, siga as diretrizes abaixo:

1.  **Faça um Fork do Repositório**: Comece criando um fork deste repositório para sua conta GitHub.
2.  **Crie uma Nova Branch**: Crie uma branch específica para sua funcionalidade ou correção de bug. Use nomes descritivos, como `feature/nova-funcionalidade` ou `bugfix/correcao-de-autenticacao`.
    ```bash
    git checkout -b feature/sua-feature
    ```
3.  **Realize Suas Alterações**: Implemente suas modificações, garantindo que o código siga as boas práticas e os padrões existentes no projeto, tanto no backend quanto no frontend.
4.  **Commit Suas Alterações**: Faça commits claros e concisos, descrevendo o que foi alterado e por quê.
    ```bash
    git commit -m 'feat: Adiciona nova funcionalidade X' # ou 'fix: Corrige bug Y'
    ```
5.  **Envie para o Repositório Remoto**: Faça o push de suas alterações para sua branch no seu repositório forked.
    ```bash
    git push origin feature/sua-feature
    ```
6.  **Abra um Pull Request (PR)**: Abra um Pull Request para o branch `main` deste repositório. Descreva detalhadamente as mudanças propostas e o problema que elas resolvem ou a funcionalidade que adicionam. Certifique-se de que todos os testes estejam passando.

Se você encontrar algum problema ou tiver sugestões, por favor, abra uma [Issue](https://github.com/Cry199/Linktree-clone-Full-Stack/issues) no repositório.




## Considerações de Segurança

A segurança é uma prioridade neste projeto, e diversas medidas foram implementadas para proteger a aplicação e os dados dos usuários. No entanto, algumas práticas adicionais são recomendadas para ambientes de produção:

*   **Gerenciamento de Segredos**: A chave secreta do JWT e outras informações sensíveis devem ser armazenadas de forma segura, preferencialmente em variáveis de ambiente ou serviços de gerenciamento de segredos (e.g., HashiCorp Vault, AWS Secrets Manager), e nunca diretamente no código-fonte.
*   **Configuração CORS em Produção**: Para o ambiente de produção, é crucial restringir as origens permitidas na configuração CORS (`allowedOrigins`) para os domínios específicos do seu frontend, em vez de usar `"*"`. Isso previne ataques como Cross-Site Request Forgery (CSRF).
*   **Refresh Tokens**: Para melhorar a segurança e a experiência do usuário, considere implementar um mecanismo de refresh tokens. Isso permite que os tokens de acesso tenham um tempo de vida mais curto, reduzindo o risco em caso de comprometimento, enquanto os refresh tokens podem ser usados para obter novos tokens de acesso de forma segura.
*   **Revogação de Tokens**: Em cenários onde a revogação imediata de um token é necessária (e.g., logout forçado, alteração de senha), pode-se implementar uma lista negra de tokens (blacklist) no lado do servidor ou usar um mecanismo de sessão para invalidar tokens específicos.
*   **Proteção contra Brute Force**: Para as rotas de autenticação (login e registro), é aconselhável implementar mecanismos de proteção contra ataques de força bruta, como limitação de taxa de requisições (rate limiting) ou bloqueio temporário de contas após múltiplas tentativas falhas.




## Melhorias Futuras

Com base em uma análise aprofundada do código, as seguintes melhorias e refatorações são sugeridas para aprimorar ainda mais o projeto:

*   **Validação de Entrada Robusta**: Implementar validação de entrada detalhada em todos os DTOs utilizando anotações do Bean Validation (e.g., `@Valid`, `@NotBlank`, `@Size`, `@Email`). Configurar o `RestExceptionHandler` para tratar `MethodArgumentNotValidException` e retornar mensagens de erro detalhadas e amigáveis.
*   **Remover Duplicidade de CORS**: Consolidar a configuração de CORS em um único local, preferencialmente no `SecurityConfig`, para evitar redundância e possíveis conflitos.
*   **Documentação OpenAPI/Swagger**: Integrar uma ferramenta como Springdoc OpenAPI ou Swagger UI para gerar automaticamente a documentação interativa da API. Isso facilita o entendimento e o consumo da API por desenvolvedores frontend e outros serviços.
*   **Comentários Javadoc**: Adicionar comentários Javadoc para classes e métodos públicos, explicando seu propósito, parâmetros e retornos, o que melhora a documentação interna do código e a compreensão para novos contribuidores.
*   **Aumentar Cobertura de Testes**: Investir na criação de testes unitários e de integração abrangentes para as principais lógicas de negócio, controladores e funcionalidades de segurança. Uma alta cobertura de testes garante a estabilidade do código e facilita futuras refatorações.
*   **Otimização de Consulta para Perfil Público**: No `LinkService` (ou `PublicController`), otimizar a consulta para buscar o usuário e seus links em uma única operação de banco de dados para o perfil público, reduzindo o número de requisições e melhorando a performance.
*   **Cache para Perfis Públicos**: Considerar a implementação de cache (e.g., com Spring Cache Abstraction e Redis) para perfis públicos frequentemente acessados. Isso pode reduzir significativamente a carga no banco de dados e melhorar o tempo de resposta da API.
