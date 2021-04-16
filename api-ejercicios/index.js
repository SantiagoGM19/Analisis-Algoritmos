/**
 * archivo principal de la API 
 */

const express = require('express');

const app = express();

// Invocar las rutas de la carpeta routers

const routers = require("./routers/index");
app.use(routers);

// Inicializando API
const port = 3000;
app.listen(port, ()=>{
    console.log(`API node: http//localhost:${port}/`);
});