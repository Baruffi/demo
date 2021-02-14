# :rocket: Template for ReactJS and NodeJS using Docker and MySQL with Typescript :blue_heart:

## :exclamation: Requirements

-   Docker (if you do not have the database installed)
-   MySQL (if you do not have docker installed)
-   Node
-   Yarn

## :blue_heart: VSCode extensions

-   Docker
-   Prisma
-   TSLint
-   Error Lens
-   Color Highlight
-   EditorConfig for VS Code
-   Visual Studio IntelliCode
-   Prettier - Code Formatter
-   GitLens - Git supercharged
-   Dracula Official (optional)
-   Material Icon Theme (optional)

## :heart: Commands (helper)

-   Follow the `How to` steps and then follow the steps below
-   `yarn prisma:generate` (generates the model types for the typescript intellisense)
-   `yarn prisma:introspect` (creates the models from the existing database)
-   `yarn prisma:migrate:save` (generates a migration from the models)
-   `yarn prisma:migrate:up` (makes changes to the database from migrations)
-   `yarn prisma:studio` (runs a visual editor for your database)

## :question: How to

-   Get started:
    -   Configure the .env:
        -   Copy the `.env.example` from `packages/api` to `.env`
            -   Environment variables:
                -   `MYSQL_USER` (DB User)
                -   `MYSQL_ROOT_PASSWORD` (DB Password)
                -   `MYSQL_DATABASE` (DB Schema)
                -   `SECRET_HASH` (Secret hash for JWT encoding)
                -   `DATABASE_URL` (DB URL for Prisma)
                -   `PORT` (Server port, default: `8080`)
        -   Copy the `.env.example` from `packages/web` to `.env.development`
            -   Environment variables:
                -   `REACT_APP_API_URL` (URL to connect to the API, REST)
        -   Change your environment variables.
    -   Type `yarn` to install its dependencies.
-   Get started for development:
    -   At `packages/api`, type: `docker-compose -f docker-compose.dev.yml up` to build and run the database.
    -   Type `yarn dev` to start both web and api (or just `yarn web:dev` and `yarn api:dev`)
    -   Access `http://localhost:3000` on the browser.
    -   Access `localhost` on the browser (phpmyadmin)
    -   Data:
        -   Server: `database`
        -   Username and Password: located at `packages/api/.env`
-   Use product build locally:
    -   Start the database server
    -   Type `yarn build` to build all the packages.
    -   Type `yarn cross-env NODE_ENV=production -- yarn start` to start both web and api (or just `yarn cross-env NODE_ENV=production -- yarn web:start` and `yarn cross-env NODE_ENV=production -- yarn api:start`).
    -   Access `http://localhost:5000` on the browser.

## :whale: Using Docker

-   Configuring the .env:
    -   Copy the `.env.example` from `packages/api` to `.env`
        -   Environment variables:
            -   `MYSQL_USER` (DB User)
            -   `MYSQL_ROOT_PASSWORD` (DB Password)
            -   `MYSQL_DATABASE` (DB Schema)
            -   `SECRET_HASH` (Secret hash for JWT encoding)
            -   `DATABASE_URL` (DB URL for Prisma)
            -   `PORT` (Server port, default: `8080`)
    -   Copy the `.env.example` from `packages/web` to `.env.production`
        -   Environment variables:
            -   `REACT_APP_API_URL` (URL to connect to the API, REST)
    -   Change your environment variables.
-   At `packages/api`:
    -   Type `docker build -t template/api .`
    -   Type `docker-compose up -d`
-   At `packages/web`:
    -   Type `docker build -t template/web .`
    -   Type `docker-compose up -d`
-   Access `http://localhost:5000` on the browser.
