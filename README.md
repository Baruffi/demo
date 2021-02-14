# Demo exercícios de programação

- [Demo exercícios de programação](#demo-exercícios-de-programação)
  - [Tecnologias utilizadas](#tecnologias-utilizadas)
  - [Execução do projeto](#execução-do-projeto)

## Tecnologias utilizadas

- Docker
- MySQL
- Maven
- Spring
- Node
- Yarn

## Execução do projeto

Se você possui o [docker](https://www.docker.com/), basta executar o comando `docker-compose up` na pasta raiz do projeto.

Senão, é necessário ter um banco de dados [mysql](https://www.mysql.com/) rodando localmente com a database `demo-db`, assim como ter instalado [java 8 ou superior](https://www.java.com/pt-BR/download/ie_manual.jsp?locale=pt_BR) e [maven](https://maven.apache.org/) para o back. Junto de [node](https://nodejs.org/pt-br/) e [yarn](https://yarnpkg.com/) para o front.

Então executar na pasta `backend/demo` os comandos: `mvn clean package` e `java -jar target/demo-0.0.1-SNAPSHOT.jar`.

Em seguida, executar na pasta `frontend/demo` os comandos: `yarn` e `yarn start`.
