import express from "express";

const app = express();

/**
 * GET    => Buscar uma informação
 * POST   => Inserir uma informação
 * PUT    => Alterar uma informação
 * DELETE => Remover uma informação
 * PATCH  => Alterar uma informação específica
 */
app.get("/test", (request, response) => {
  // Request => Entrada
  // Response => Saída
  return response.send("Olá NLW");
});

app.post("/test-post", (request, response) => {
  return response.send("Olá NLW");
});

app.listen(3000, () => console.log("Server is running"));
