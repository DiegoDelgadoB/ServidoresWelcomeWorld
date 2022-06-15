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


    fs.writeFile(ruta, `${moment().format('DD/MM/YYYY')}\n${contenido}`, "utf8", (error) => {
        error ? res.send("No se ha podido crear e archivo") : res.send("El archivo fue creado con éxito");

    })

});

// Disponibilizar ruta para devolver el contenido de un archivo
// cuyo nombre es declarado en los parámetros de la consulta recibída.

app.get('/leer', (req, res) => {
    const archivo = req.query.archivo;
    let ruta = `${__dirname}/archivos/${archivo}.txt`;


    fs.readFile(ruta, "utf-8", (error, data) => {
        error ? res.send("No se ha podido leer el archivo") : res.send(data);
    
    })
});

//Disponibilizar una ruta para renombrar un archivo, cuyo nombre 
// y nuevo nombre es declarado en los parámetros de la consulta recibida.

//En la ruta para renombrar, devuelve un mensaje de éxito incluyendo el nombre anterior 
// del archivo y su nuevo nombre de forma dinámica.

app.get('/renombrar', (req,res) => {
    const {nombre, nuevoNombre} = req.query;
    let rutaViejo = `${__dirname}/archivos/${nombre}`;
    let rutaNuevo = `${__dirname}/archivos/${nuevoNombre}.txt`;

    fs.rename(rutaViejo, rutaNuevo, (error) => {
        error ? res.send("No se ha podido renombrar el archivo") : res.send(`El archivo ${nombre} ahora se llama ${nuevoNombre}`);

    })
});


