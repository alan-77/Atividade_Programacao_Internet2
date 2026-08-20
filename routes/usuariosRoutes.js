import express from 'express';

const app = express();

app.get("/", (req, res) => {
  res.send("Lista de todos os usuários cadastrados");
});

app.get("/perfil", (req, res) => {
  res.send("Página de perfil do usuário logado");
});

app.get("/login", (req, res) => {
  res.send("Formulário de login de usuários");
});

app.get("/:id", (req, res) => {
    const param = req.params.id;
    res.send(`Detalhes do usuário com o ID: ${id}`);
});