const mongoose = require('mongoose');
const password = 'mongola_18';
const dbname = 'Tema14_tarea2';
const path = `mongodb+srv://sitamarvin18:${password}@cluster0.9ogkzqn.mongodb.net/${dbname}}`;

// los dos parámetros después de path, son para evitar warning. evita funciones obsoletas.
// module.exports para exportar la funcion mongoose.connect.
module.exports = () => mongoose.connect(path);
