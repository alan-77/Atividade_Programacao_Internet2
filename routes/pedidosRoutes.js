import express from 'express';

const app = express();

app.get("/", (req, res) => {
  res.send("Lista gera de pedidos realizados");
});

app.get("/meus-pedidos", (req, res) => {
  res.send("Histórico de pedidos do cliente");
});

app.get("/status/:codigo", (req, res) => {
    const param = req.params.codigo;
    res.send(`Consultando statuso do pedido numero: ${codigo}`);
});