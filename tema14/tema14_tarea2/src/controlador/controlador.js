const controlador = {};

//
const conexion = require('../conexionBBDD/conexion');

controlador.index = async (req,res)=>{
    try{
    const title = 'Probando mongoDB con Node.js';
    await conexion();
    console.log('conexion ok');
    res.render('index', )
    }catch(err){
        console.error(err);
    }
}