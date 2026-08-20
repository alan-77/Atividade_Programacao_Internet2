import express from 'express';

const app = express();

app.get("/", (req, res) => {
  res.send("Catálogo de produtos disponíveis");
});

app.get("/promocoes", (req, res) => {
  res.send("Lista de produtos em promoção");
});

app.get("/categoria/:nomeCategoria", (req, res) => {
    const param = req.params.nomeCategoria;
    res.send(`Filtrando produtos pela categoria: ${nomeCategoria}`);
});