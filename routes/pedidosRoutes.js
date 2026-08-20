import express from 'express';

const pedidos_routes = express.Router();

pedidos_routes.get("/", (req, res) => {
  res.send("Lista gera de pedidos realizados");
});

pedidos_routes.get("/meus-pedidos", (req, res) => {
  res.send("Histórico de pedidos do cliente");
});

pedidos_routes.get("/status/:codigo", (req, res) => {
    const param = req.params.codigo;
    res.send(`Consultando statuso do pedido numero: ${codigo}`);
});

export default pedidos_routes;