/* Funcionalidad de la ruta cuando el cliente se conecta a la ruta */

// Creamos un objeto para poder exportar todas las funcionalidades que tiene index.controlador.
const controlador = {}
// Exportamos la función de conexión desde el controlador
const conexion = require('../conexionBBDD/conexion');
// Utilizamos el modelo para importar los datos desde t14.model.js
const NombresModel = require('../models/t14.model');

controlador.index = async (req, res) =>{
    // Envía al navegador el mensaje.
    // res.send('La conexión ha sido correcta desde controlador');
    try{
        const title= 'INDEX DINAMICO'
        // Aquí indicamos el archivo que queremos renderizar. El archivo index es el que hemos definido en app.
        // El segundo parámetro es una variable para que la lea pug
        // Ejecutamos la conexión
        await  conexion();
        // Con esto resuperamos los datos de la colección de la bbdd y los guardamos en la constante nombreApellidos
        const nombreApellidos = await NombresModel.find();
        console.log(nombreApellidos);
        console.log("ok");

        res.render('index',{title})
    }catch(err){
        console.error(err)
    }
}

module.exports = controlador;