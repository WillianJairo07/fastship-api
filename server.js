require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);
require('dotenv').config();

const express = require('express');
const conectarDB = require('./config/db');

const app = express();

app.use(express.json());

// conectar base de datos
conectarDB();

app.use('/api/envios', require('./routes/envios'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Servidor corriendo en puerto " + PORT);
});