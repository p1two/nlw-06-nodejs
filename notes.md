DEPENDÊNCIAS

@types/bcryptjs
@types/express
@types/uuid
-> algumas bibliotecas tem um biblioteca separada com os tipos disponíves, que
devem ser adicionadas como dependência de desenvolvimento

ts-node-dev
-> utilizado em dev para: Compiles your TypeScript app and restarts when files
 are modified

reflect-metadata
-> necessário pelo TypeORM

express-async-errors
-> Async/await error handling support for expressjs


Tipos de requisição

GET    => Buscar uma informação
POST   => Inserir uma informação
PUT    => Alterar uma informação
DELETE => Remover uma informação
PATCH  => Alterar uma informação específica


Tipos de parametros

Routes Params => http://localhost:3000/products/9378gndl0588frjn
Query Params  => http://localhost:3000/products?nome=teclado&marca=multilaser
Body params   => {
  "nome": "Teclado XPTO",
  "marca": "Multilaser"
}

Migrations

Seria uma forma de versionar as alterações no banco, como um git para o banco

* Criar uma migraton: $ yarn typeorm migration:create -n <nome_da_migration>
* Rodar migrations: $ yarn typeorm migration:run
* Criar entity: $ yarn typeorm entity:create -n <nome_da_entidade>


TypeORM

Entity (User) <-> ORM <-> BD
            Repositórios
            |>camada que faz a comunicação entre a entidade e o banco de dados


Fluxo da aplicação

-> Server -> Routes -> Controller -> Service -> Repositories -> BD


Middleware

app.use é utilizado para adicionar middlewares
 -> express.json: habilita o json nas requisições
 -> router: adiciona as rotas

middleware para tratar erro precisa de 4 parametros, outros precisam de somente 3


Clean Architecture
-> Uma das regras seria para separar as operações CRUD (create, read, update, delete)
em serviços diferentes invés de agrupar todas as operações relacionadas à uma
entidade em um único arquivo
juntar


Async/await
-> Funções que irão precisar chamar outra função com await necessitam ser declaradas como async
-> Funções que retornam uma Promise precisam ser chamadas com await