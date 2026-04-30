const express = require("express");
const app = express();
app.use(express.json());
// Rota de produtos
app.get("/products", (req, res) => {
 res.json([
 { id: 1, name: "Produto Exemplo" },
 { id: 2, name: "Outro Produto" },
 ]);
});
// Rota de categorias
app.get("/categories", (req, res) => {
 res.json([
 { id: 1, name: "Eletrônicos" },
 { id: 2, name: "Livros" },
 ]);
});
// Rota de usuários
app.get('/users', (req, res) => {
 res.json([
 { id: 1, name: 'Alice' },
 { id: 2, name: 'Bob' },
 { id: 3, name: 'Carlos' }
 ]);
});
const PORT = 3000;
app.listen(PORT, () => {
 console.log(`🚀 API Loja disponível em http://localhost:${PORT}/products`);
});