import 'dotenv/config';
import { ObjectId } from 'mongodb';
import conectarAoBanco from '../config/dbConfig.js';


const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);


export async function getTodosPosts() {
    const db = conexao.db("imersao-instabytes");
    const collection = db.collection("posts");
    return collection.find().toArray();
}

export async function criarPost(novoPost) {
    const db = conexao.db("imersao-instabytes");
    const collection = db.collection("posts");
    return collection.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao-instabytes");
    const collection = db.collection("posts");
    const objId = ObjectId.createFromHexString(id)
    return collection.updateOne({_id: new ObjectId(objId)}, {$set:novoPost});
}