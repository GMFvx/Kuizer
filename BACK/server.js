const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const db = require('./config/db');
const mysql = require('mysql2');


const app = express();

// Configurações do middleware
app.use(cors());
app.use(bodyParser.json());

// Conexão ao banco de dados
db.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao Banco');
});

// Rotas
app.use('/', authRoutes);

// Inicializa o servidor
app.listen(3001, () => {
    console.log('Servidor rodando na porta http://localhost:3001.');
});
