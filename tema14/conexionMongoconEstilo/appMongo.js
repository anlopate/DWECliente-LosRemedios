// SERVIDOR EXPRESS
import express from 'express';
const app = express();
// NOS PERMITE USAR req.body en la función de enviar datos que recoge los datos enviados del formulario en JSON.
app.use(express.json());

// RUTAS
const router = express.Router();
var __dirname = path.resolve();
import path from 'path';

// CONEXION CON MONGO
import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://analopezatero:19800718@cluster0.nntug8j.mongodb.net/?retryWrites=true&w=majority";
// Crea un cliente de MongoDB pasando la uri de conexión.
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
// CLIENT CONECTA CON LA BBDD
client.connect(err => {
  if (err) throw err;
  console.log("Conectado a MongoDB!");
});

// // VARIABLES DE CONEXIÓN CON MONGODB
const db = client.db('tema14');
const collection = db.collection('personas');

// CARGO PAGINA PRINCIPAL
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

// const alguien = {nombre:'Paquito', apellidos:'Atero'}
// if (collection.insertOne(alguien)){
//   console.log("Ok");
// }

app.post('/enviarDatos', function(req,res){
      let name = req.body.nombre;
      let surname = req.body.apellidos;
    
      collection.insertOne({nombre: name, apellidos: surname})
      .then(() => {
        console.log("Datos enviados correctamente");
        let datosMostrar = collection.find().toArray();
        return datosMostrar;
      })
      .then(datosMostrar => {
        res.send(datosMostrar);

      })
})

// CONECTANDO EXPRESS
app.use('/', router);
app.use(express.static(__dirname));
app.listen(3000);
console.log('Escuchando en puerto 3000');
