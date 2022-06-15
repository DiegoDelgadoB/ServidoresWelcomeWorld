const express = require('express');
const app = express();
const fs = require('fs');
const moment = require('moment')

// Crear servidor en Node.
app.listen(8080, () => console.log("Servidor habilitado https://localhost:3000"));
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);

});

// Disponibilizar ruta para creación de archivo con los parámetros
// de consulta recibida.
// Agrega la fecha actual al comienzo de cada archivo creado en formato "dd/mm/yyyy".
// Considera que si el día o el mes es menor a 10, cconcatenar un 0 a la izquierda.

app.get('/crear', (req, res) => {
    const {archivo, contenido} = req.query;
    let ruta = `${__dirname}/archivos/${archivo}.txt`;


});
