import express from 'express';

const posts = [
    { id: 1, descricao: "Uma foto teste", imagem: "https://placecats.com/millie/300/150" },
    { id: 2, descricao: "Paisagem montanhosa", imagem: "https://placecats.com/millie/300/150" },
    { id: 3, descricao: "Gato fazendo panqueca", imagem: "https://placecats.com/millie/300/150" }
  ];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/posts', (req, res) => {
    res.status(200).json(posts);
});
function buscarFunction(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)});
}

app.get('/posts/:id', (req, res) => {
    const index = buscarFunction(req.params.id);
    res.status(200).json(posts[index]);
});