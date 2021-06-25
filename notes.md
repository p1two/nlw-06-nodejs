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

yarn typeorm entity:create -n User
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
