import express from 'express';
const app = express();

import usuariosRoutes from './routes/usuariosRoutes.js';
import pedidosRoutes from './routes/pedidosRoutes.js';
import produtosRoutes from './routes/produtosRoutes.js';

app.listen(8080, () => {
  console.log("Servidor de e-commerce online!");
});

app.get("/", (req, res) => {
  res.send("Rota raiz");
});

app.use('/usuarios', usuariosRoutes);
app.use('/pedidos', pedidosRoutes);
app.use('/produtos', produtosRoutes);