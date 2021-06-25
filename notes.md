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
