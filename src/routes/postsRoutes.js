import express from "express";
import multer from "multer";
import cors from "cors";
import { listarPosts, postarNovoPost, uploadImage, atualizarNovoPost } from "../controllers/postsController.js";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
};

const upload = multer({dest:"./uploads"})

const routes = (app) => {

    app.use(express.json());
    app.use(cors(corsOptions));
    // Rota para buscar todos os posts
    app.get("/posts", listarPosts);
    // Rota para criar um novo post
    app.post("/posts", postarNovoPost);
    app.post("/upload", upload.single("imagem"), uploadImage)

    app.put("/upload/:id", atualizarNovoPost)
};



export default routes;