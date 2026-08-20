import express from 'express';

const produtos_routes = express.Router();

produtos_routes.get("/", (req, res) => {
  res.send("Catálogo de produtos disponíveis");
});

produtos_routes.get("/promocoes", (req, res) => {
  res.send("Lista de produtos em promoção");
});

produtos_routes.get("/categoria/:nomeCategoria", (req, res) => {
    const param = req.params.nomeCategoria;
    res.send(`Filtrando produtos pela categoria: ${nomeCategoria}`);
});

export default produtos_routes;