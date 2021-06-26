# Notes

## Class-1

```sh
yarn init -y
git init

yarn add typescript tsconfig-paths -D
yarn tsc --init
# Convert TS to JS
yarn tsc

yarn add prettier eslint eslint-config-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
yarn eslint --init

yarn add express
# Some libraries have a separate library with available types
yarn add @types/express -D

# Auto convert TS to JS
yarn add ts-node-dev -D
yarn dev
```

### Requisition Types

- GET => get information
- POST => insert information
- PUT => change information
- DELETE => remove information
- PATCH => change specific information

## Class-2

```sh
yarn add typeorm reflect-metadata sqlite3

yarn typeorm -help
yarn typeorm migration:create -n CreateUsers
yarn typeorm migration:run
yarn typeorm migration:revert

yarn add uuid
yarn add @types/uuid -D

yarn typeorm entity:create -n User -d src/user/entity
```

### Types of Parameters

- Routes Params => http://localhost:3000/products/9378gndl0588frjn
- Query Params => http://localhost:3000/products?nome=teclado&marca=multilaser
- Body params => { "nome": "Teclado XPTO", "marca": "Multilaser" }

### Migrations

It would be a way to version changes in the database, like a git for the database

### TypeORM

- Entity (User) <-> ORM (repositories) <-> BD

### Application Flow

-> Server -> Routes -> Controller -> Service -> Repositories -> BD

## Class-3

```sh
yarn add express-async-errors
```

### Middleware

app.use is used to add middlewares

- express.json: enable json on requests
- router: add routes

middleware to handle error needs 4 parameters, others need only 3

## Class-4

```sh
yarn add jsonwebtoken
yarn add @types/jsonwebtoken -D

yarn typeorm migration:create -n AlterUsersAddPassword
yarn typeorm migration:run

yarn add bcryptjs
yarn add @types/bcryptjs -D
```

## Class-5

```sh
yarn add class-transformer
yarn add cors
yarn add @types/cors -D
```

### Async/await

Functions that will need to call another function with await need to be declared as async

Functions that return a Promise need to be called with await

### Clean Architecture

One of the rules would be to separate CRUD operations (create, read, update, delete) into different services instead of grouping all operations related to an entity in a single file

## Heroku

```sh
sudo snap install --classic heroku
heroku login
heroku apps
heroku git:remote -a your_app_name
heroku run bash
npx typeorm migration:show
npx typeorm migration:run
```

### Config Vars

TYPEORM_ENTITIES = dist/entities/*.js

TYPEORM_MIGRATIONS = dist/database/migrations/*.js
