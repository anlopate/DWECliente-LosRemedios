/* SERVIDOR CREADO CON EXPRESS  */
/* app usa ls rutas */

//  Vamos a utilizar el módulo express.
const express = require('express');
// Para utilizarlo, tenemos que ejecutarlo como función. Ahora la constante app tiene guardada toda las propiedades y métodos de express. 
const app = express();

// Utilizamos el módulo path de node que se encarga de normalizar rutas. Depende del sistema operativo las rutas se escriben de una forma o de otra.
const path = require('path');

// Vamos a asignar la función pug al servidor express para utilizar un motor de platillas html
app.set('view engine', 'pug');
// Con esto localiza la carpeta vistas (views)
app.set('views', path.join(__dirname, 'views'));

// Rutas
// Importamos el módulo express.Router desde index.routes.
const routes = require('./routes/index.routes');
// Indicamos a express que lo utilice
app.use(routes);
// Archivos estáticos
// LA ruta estática que vamos a utilizar, la vamos a unir con join que une o una variable  a un trozo de ruta con otro.
// En este caso lo que está diciendo es: 
// 1. Coge la ruta donde estoy(__dirname), donde se está ejecutando nuestro archivo app
// 2. Subes un nivel (../) y te metes en la carpeta public
app.use(express.static(path.join(__dirname, '../public')))

app.use((req,res) => {
    res.sendFile(path.join(__dirname, '../puclic/index.html'));
})

// Utilizamos la constante __dirname que ofrece node para indica la ruta absoluta donde estamos. 
console.log(__dirname)
app.use((req, res) => {
    res.sendFile('')
})

app.listen(3000, () =>{
    console.log("Servidor a la espera de conexiones ...")
})