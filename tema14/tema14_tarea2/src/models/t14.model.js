const mongoose = require('mongoose');
// De mongoose extrae el esquema
const {Schema} = mongoose;

// Creamos las normas de nuestro modelo de bb de datos. Los parámetros de Schema son el modelo de nuestra bbdd
const Nombres = new Schema({
    nombre: String,
    apellidos: String
})

// Con esto le decimos que cree un modelo que va a corresponder con la colección de nuestra bbdd. LE modelo de datos tiene que corresponder
// con el schema creado (Nombres) 
const NombresModel = mongoose.model('personas', Nombres)

module.exports = NombresModel