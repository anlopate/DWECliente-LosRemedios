/* Ruta que se usa para las peticiones */

const express = require('express');
const router = express.Router();
const controlador = require('../controlador/index.controlador')


/* Express tiene un método para cada verbo de conexión con la bbdd.*/ 
// El primer parámetro es la ruta por donde va a entrar los parámetros de la petición ( en este caso 3000).
// El segundo parámetro la función que se ejecuta cuando llega.
router.get('/', controlador.index)

// Con esto hacemos que todo lo que hay en express.Router, se puede exporta a otra  archivo.
module.exports = router;