import express from 'express';
const app = express();

const usuariosRoutes = require('./routes/usuariosRoutes.js');
const pedidosRoutes = require('./routes/pedidosRoutes.js');
const produtosRoutes = require('./routes/produtosRoutes.js');

app.listen(8080, () => {
  console.log("Servidor de e-commerce online!");
});

app.get("/", (req, res) => {
  console.log("Chegou requisicao");
  res.send("Servidor online");
});