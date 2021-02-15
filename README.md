# Demo exercícios de programação

- [Demo exercícios de programação](#demo-exercícios-de-programação)
  - [Tecnologias utilizadas](#tecnologias-utilizadas)
  - [Layout do projeto](#layout-do-projeto)
    - [Votos em relação ao total de eleitores](#votos-em-relação-ao-total-de-eleitores)
    - [Algorítmo de ordenação bubble sort](#algorítmo-de-ordenação-bubble-sort)
    - [Fatorial](#fatorial)
    - [Multiplos de 3 ou 5](#multiplos-de-3-ou-5)
    - [Cadastro de veículos](#cadastro-de-veículos)
  - [Execução do projeto](#execução-do-projeto)

## Tecnologias utilizadas

- Docker
- MySQL
- Maven
- Spring
- Node
- Yarn

## Layout do projeto

### Votos em relação ao total de eleitores

Esta demonstração se encontra na página principal do frontend da aplicação (o código se encontra na pasta da página [Votes](frontend/demo/src/pages/Landing/Votes/index.tsx)).

### Algorítmo de ordenação bubble sort

Esta demonstração se encontra na página principal do frontend da aplicação (o código se encontra na pasta da página [BubbleSort](frontend/demo/src/pages/Landing/BubbleSort/index.tsx)).

### Fatorial

Esta demonstração se encontra na página principal do frontend da aplicação (o código se encontra na pasta da página [Factorial](frontend/demo/src/pages/Landing/Factorial/index.tsx)).

### Multiplos de 3 ou 5

Esta demonstração se encontra na página principal do frontend da aplicação (o código se encontra na pasta da página [Multiples](frontend/demo/src/pages/Landing/Multiples/index.tsx)).

### Cadastro de veículos

O cadastro de veículos se encontra na página `Veículos` do frontend, acessível pela Header (o código se encontra na pasta da página [Listing](frontend/demo/src/pages/Listing/index.tsx)).

## Execução do projeto

Se você possui o [docker](https://www.docker.com/), basta executar o comando `docker-compose up` na pasta raiz do projeto e acessar a url `http://localhost:5000` em seu navegador quando todas as builds estiverem concluídas.

Senão, é necessário ter um banco de dados [mysql](https://www.mysql.com/) rodando localmente com a database `demo-db`, assim como ter instalado [java jdk 8 ou superior](https://www.oracle.com/br/java/technologies/javase/javase-jdk8-downloads.html) e [maven](https://maven.apache.org/) para o back. Junto de [node](https://nodejs.org/pt-br/) e [yarn](https://yarnpkg.com/) para o front.

Então executar na pasta `backend/demo` os comandos: `mvn clean package` e `java -jar target/demo-0.0.1-SNAPSHOT.jar`.

Em seguida, executar na pasta `frontend/demo` os comandos: `yarn` e `yarn start`.
