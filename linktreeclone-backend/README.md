# Linktree Clone - Backend

Este projeto é a implementação do backend para um clone do Linktree, desenvolvido com **Spring Boot** e **Java 17**. Ele oferece uma **API RESTful** robusta e segura para gerenciar perfis de usuários, autenticação via **JWT (JSON Web Tokens)** e a gestão dos links associados a cada perfil. O objetivo principal é fornecer uma base sólida e escalável para uma aplicação full-stack que permite aos usuários criar e compartilhar uma página personalizada com todos os seus links importantes.

O projeto foi estruturado com foco em **segurança**, **manutenibilidade** e **performance**, seguindo as melhores práticas de desenvolvimento com Spring. A arquitetura modular facilita a compreensão e futuras expansões, enquanto a integração com **Docker** garante um ambiente de desenvolvimento e implantação consistente.




## Funcionalidades

O backend do Linktree Clone oferece um conjunto abrangente de funcionalidades para gerenciar perfis de links de forma eficiente e segura:

*   **Autenticação e Autorização Segura**: Implementa um sistema completo de registro e login de usuários, utilizando **JWT (JSON Web Tokens)** para garantir a segurança das requisições à API. As rotas são protegidas, assegurando que apenas usuários autenticados e autorizados possam acessar e manipular seus dados.
*   **Gerenciamento Completo de Usuários**: Permite a criação de novos usuários, bem como a leitura, atualização e exclusão de seus perfis. As senhas são armazenadas de forma segura utilizando criptografia robusta.
*   **Gestão Dinâmica de Links**: Usuários autenticados podem adicionar, editar, excluir e listar seus links personalizados. Cada link é associado ao perfil do usuário, permitindo uma organização flexível e personalizável.
*   **Perfis Públicos Acessíveis**: Oferece a capacidade de acessar perfis de links publicamente através de um nome de usuário, sem a necessidade de autenticação. Isso replica a funcionalidade central do Linktree, permitindo que os usuários compartilhem facilmente sua coleção de links.
*   **Tratamento de Exceções Global**: Garante uma experiência de API consistente e amigável ao usuário, com um tratamento centralizado de exceções. Erros como recursos não encontrados (`ResourceNotFoundException`) ou acesso não autorizado (`UnauthorizedException`) são mapeados para respostas HTTP padronizadas e informativas.
*   **Configuração CORS Flexível**: Suporta a configuração de Cross-Origin Resource Sharing (CORS), essencial para a integração com aplicações frontend. A configuração é projetada para ser segura em produção, permitindo a restrição de origens permitidas.




## Tecnologias Utilizadas

O projeto foi construído utilizando um conjunto de tecnologias modernas e amplamente adotadas no ecossistema Java, garantindo robustez, escalabilidade e facilidade de desenvolvimento:

*   **Java 17**: A versão mais recente do Java LTS (Long-Term Support), oferecendo melhorias de performance, novas funcionalidades de linguagem e um ambiente de execução otimizado.
*   **Spring Boot**: O framework líder para o desenvolvimento de aplicações Java, simplificando a configuração e o deploy de microsserviços e aplicações web. Ele acelera o desenvolvimento com sua abordagem "convenção sobre configuração".
*   **Spring Security**: Um framework poderoso e altamente personalizável que fornece serviços de autenticação e autorização para aplicações Spring. Essencial para proteger a API com JWT.
*   **Spring Data JPA**: Facilita a implementação de camadas de acesso a dados, reduzindo drasticamente a quantidade de código boilerplate necessária para interagir com bancos de dados relacionais. Utiliza Hibernate como provedor JPA padrão.
*   **Maven**: Uma ferramenta de automação de build e gerenciamento de projetos que padroniza o processo de compilação, empacotamento e gerenciamento de dependências do projeto.
*   **H2 Database**: Um banco de dados relacional em memória, ideal para ambientes de desenvolvimento e testes devido à sua leveza e facilidade de uso. Pode ser facilmente substituído por bancos de dados de produção como PostgreSQL ou MySQL.
*   **JWT (JSON Web Tokens)**: Um padrão aberto (RFC 7519) que define uma forma compacta e auto-contida para transmitir informações de forma segura entre as partes como um objeto JSON. Utilizado para autenticação stateless na API.
*   **Docker**: Uma plataforma de conteinerização que permite empacotar a aplicação e suas dependências em um contêiner isolado, garantindo que ela funcione de forma consistente em qualquer ambiente.




## Estrutura do Projeto

O projeto adota uma arquitetura em camadas bem definida, seguindo as convenções do Spring Boot para promover a modularidade, a separação de responsabilidades e a manutenibilidade. A organização dos pacotes reflete essa abordagem:

*   `br.com.linktreeclone.config`: Contém classes de configuração globais para a aplicação. Inclui `SecurityConfig`, que define as regras de segurança do Spring Security e a configuração de CORS, e `WebConfig` (atualmente comentada, mas que poderia ser usada para configurações web adicionais).
*   `br.com.linktreeclone.controller`: Responsável por expor os endpoints da API RESTful. Cada controlador (`AuthenticationController`, `LinkController`, `PublicController`, `UserController`) lida com um conjunto específico de recursos, recebendo requisições HTTP, validando dados de entrada e delegando a lógica de negócios para a camada de serviço.
*   `br.com.linktreeclone.dto`: Armazena os Data Transfer Objects (DTOs), que são objetos simples utilizados para transferir dados entre as camadas da aplicação (e.g., entre o controlador e o serviço, ou entre o serviço e o cliente). Isso evita a exposição direta das entidades de domínio e permite maior flexibilidade na API.
*   `br.com.linktreeclone.entity`: Define as entidades de domínio, que representam os objetos de negócio e são mapeadas para as tabelas do banco de dados utilizando JPA (Java Persistence API).
*   `br.com.linktreeclone.exception`: Contém classes de exceção personalizadas (`ResourceNotFoundException`, `UnauthorizedException`) e o `RestExceptionHandler`, que centraliza o tratamento de erros da API, garantindo respostas padronizadas e informativas para o cliente.
*   `br.com.linktreeclone.repository`: Define as interfaces de repositório que estendem `JpaRepository` do Spring Data JPA. Essas interfaces fornecem métodos para operações CRUD e consultas personalizadas ao banco de dados, abstraindo a lógica de persistência.
*   `br.com.linktreeclone.security`: Contém a lógica relacionada à segurança da aplicação, incluindo `SecurityFilter` (para interceptar e processar tokens JWT) e `TokenService` (responsável pela geração e validação de JWTs).
*   `br.com.linktreeclone.service`: Implementa a lógica de negócios principal da aplicação. As classes de serviço (`LinkService`, `UserService`) orquestram as operações, interagem com os repositórios e aplicam as regras de negócio, garantindo que os controladores permaneçam enxutos e focados na camada de apresentação.




## Como Começar

Para colocar o Linktree Clone Backend em funcionamento em seu ambiente local, siga as instruções abaixo. Certifique-se de ter os pré-requisitos instalados.

### Pré-requisitos

Antes de iniciar, verifique se você possui as seguintes ferramentas instaladas em sua máquina:

*   **Java Development Kit (JDK) 17 ou superior**: Necessário para compilar e executar a aplicação Java.
*   **Maven 3.x**: Ferramenta de gerenciamento de projetos e automação de build.
*   **Docker (opcional)**: Para conteinerização e execução da aplicação em um ambiente isolado.

### Configuração e Build do Projeto

1.  **Clone o repositório do GitHub:**

    ```bash
    git clone https://github.com/Cry199/Linktree-clone-Full-Stack.git
    cd Linktree-clone-Full-Stack/linktreeclone-backend
    ```

2.  **Compile o projeto com Maven:**

    Navegue até o diretório `linktreeclone-backend` e execute o comando para compilar o projeto e resolver as dependências:

    ```bash
    mvn clean install
    ```

### Executando a Aplicação

Você pode executar a aplicação de duas maneiras principais:

#### 1. Executando via JAR Executável

Após a etapa de build, um arquivo `.jar` será gerado no diretório `target/`. Você pode executá-lo diretamente:

```bash
java -jar target/linktreeclone-backend-0.0.1-SNAPSHOT.jar
```

#### 2. Executando via Docker

Para uma execução conteinerizada, que garante um ambiente consistente, siga estes passos:

1.  **Construa a imagem Docker:**

    No diretório raiz do `linktreeclone-backend`, execute:

    ```bash
    docker build -t linktreeclone-backend .
    ```

2.  **Execute o contêiner Docker:**

    ```bash
    docker run -p 8080:8080 linktreeclone-backend
    ```

Após a inicialização, a API estará acessível em `http://localhost:8080`.




## Endpoints da API

A API RESTful do Linktree Clone Backend expõe os seguintes endpoints principais, organizados por funcionalidade. Todos os endpoints protegidos requerem um JWT válido no cabeçalho `Authorization: Bearer <token>`.

### Autenticação

*   `POST /auth/login`: Autentica um usuário existente com credenciais (login e senha) e retorna um JSON Web Token (JWT) para acesso às rotas protegidas.
*   `POST /auth/register`: Registra um novo usuário na plataforma. Requer um login, senha e um papel (role) para o usuário.

### Usuários (Rotas Protegidas)

*   `GET /users/profile`: Retorna o perfil completo do usuário autenticado, incluindo seus dados e links associados.
*   `PUT /users/profile`: Atualiza as informações do perfil do usuário autenticado. Os dados a serem atualizados são enviados no corpo da requisição.

### Links (Rotas Protegidas)

*   `GET /links`: Retorna uma lista de todos os links pertencentes ao usuário autenticado.
*   `POST /links`: Adiciona um novo link ao perfil do usuário autenticado. O título e a URL do link são fornecidos no corpo da requisição.
*   `PUT /links/{id}`: Atualiza um link existente, identificado pelo seu `id` (UUID), pertencente ao usuário autenticado. Os novos dados do link são enviados no corpo da requisição.
*   `DELETE /links/{id}`: Exclui um link específico, identificado pelo seu `id` (UUID), do perfil do usuário autenticado.

### Perfil Público (Rota Pública)

*   `GET /public/{username}`: Retorna o perfil público de um usuário específico, identificado pelo seu `username`. Este endpoint é acessível sem autenticação e exibe os links configurados publicamente pelo usuário.




## Contribuição

Contribuições são muito bem-vindas! Se você deseja aprimorar este projeto, adicionar novas funcionalidades, corrigir bugs ou melhorar a documentação, sinta-se à vontade para contribuir. Por favor, siga as diretrizes abaixo:

1.  **Faça um Fork do Repositório**: Comece criando um fork deste repositório para sua conta GitHub.
2.  **Crie uma Nova Branch**: Crie uma branch específica para sua funcionalidade ou correção de bug. Use nomes descritivos, como `feature/nova-funcionalidade` ou `bugfix/correcao-de-autenticacao`.
    ```bash
    git checkout -b feature/sua-feature
    ```
3.  **Realize Suas Alterações**: Implemente suas modificações, garantindo que o código siga as boas práticas e os padrões existentes no projeto.
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

*   **Validação de Entrada Robusta**: Implementar validação de entrada detalhada em todos os DTOs (`LoginRequestDTO`, `RegisterRequestDTO`, `LinkRequestDTO`, `UpdateProfileRequestDTO`) utilizando anotações do Bean Validation (e.g., `@Valid`, `@NotBlank`, `@Size`, `@Email`). Configurar o `RestExceptionHandler` para tratar `MethodArgumentNotValidException` e retornar mensagens de erro detalhadas e amigáveis.
*   **Remover Duplicidade de CORS**: Consolidar a configuração de CORS em um único local, preferencialmente no `SecurityConfig`, para evitar redundância e possíveis conflitos.
*   **Documentação OpenAPI/Swagger**: Integrar uma ferramenta como Springdoc OpenAPI ou Swagger UI para gerar automaticamente a documentação interativa da API. Isso facilita o entendimento e o consumo da API por desenvolvedores frontend e outros serviços.
*   **Comentários Javadoc**: Adicionar comentários Javadoc para classes e métodos públicos, explicando seu propósito, parâmetros e retornos, o que melhora a documentação interna do código e a compreensão para novos contribuidores.
*   **Aumentar Cobertura de Testes**: Investir na criação de testes unitários e de integração abrangentes para as principais lógicas de negócio, controladores e funcionalidades de segurança. Uma alta cobertura de testes garante a estabilidade do código e facilita futuras refatorações.
*   **Otimização de Consulta para Perfil Público**: No `LinkService` (ou `PublicController`), otimizar a consulta para buscar o usuário e seus links em uma única operação de banco de dados para o perfil público, reduzindo o número de requisições e melhorando a performance.
*   **Cache para Perfis Públicos**: Considerar a implementação de cache (e.g., com Spring Cache Abstraction e Redis) para perfis públicos frequentemente acessados. Isso pode reduzir significativamente a carga no banco de dados e melhorar o tempo de resposta da API.



