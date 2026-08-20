import express from 'express';

const usuarios_routes = express.Router();

usuarios_routes.get("/", (req, res) => {
  res.send("Lista de todos os usuários cadastrados");
});

usuarios_routes.get("/perfil", (req, res) => {
  res.send("Página de perfil do usuário logado");
});

usuarios_routes.get("/login", (req, res) => {
  res.send("Formulário de login de usuários");
});

usuarios_routes.get("/:id", (req, res) => {
    const param = req.params.id;
    res.send(`Detalhes do usuário com o ID: ${id}`);
});

export default usuarios_routes;