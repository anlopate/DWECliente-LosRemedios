
// SERVIDOR EXPRESS
import express from 'express';
const app = express();
// NOS PERMITE USAR req.body en la función de enviar datos que recoge los datos enviados del formulario en JSON.
app.use(express.json());

// RUTAS
const router = express.Router();
var __dirname = path.resolve();
import path from 'path';


// CONECTAR A MONGODB
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

// VARIABLES DE CONEXIÓN CON MONGODB
const db = client.db('tema14');
const collection = db.collection('personas');

// SE CARGA LA PAGINA PRINCIPAL
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

// SE ENVIAN DATOS A LA BBDD
// app.post('/enviarDatos', (req, res) => {
//   try{
//     const datosRecogidos = req.body;
//     collection.insertOne(datosRecogidos);
//     res.send("Datos enviados correctamente");
//   }catch(err){
//     res.send("Datos no enviados");
//   }
// });
app.post('/enviarDatos', (req, res) => {
  try{
    const datosRecogidos = req.body;
    collection.insertOne(datosRecogidos, (err, result) => {
      if (err) throw err;
      res.send("Datos enviados correctamente");
    });
  }catch(err){
    res.send("Datos no enviados");
  }
});

// SE RECOGEN DATOS DE LA BBDD **ESTO NO LO SE**
// Los datos devueltos, se introducen en un array y se devuelven en forma de JSON:
app.get('/mostrarDatos', (req, res) => {
  try{
    collection.find().toArray((err, datos) => {
      if (err) throw err;
      res.json(datos);
    });
  }catch(err){
    res.send("Error al mostrar los datos");
  }
});


app.use('/', router);
app.use(express.static(__dirname));
app.listen(3000);
console.log('Escuchando en puerto 3000');





// export async function conectar() {
//   const client = new MongoClient(uri);
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     // await client.connect();
//     // Send a ping to confirm a successful connection
//     // await client.db("admin").command({ ping: 1 });
//     // console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     const database = client.db('tema14');
//     const datos = database.collection('personas');
//     // await datos.insertOne({Nombre: "Ana", Apellidos: "Lopez"});
//     // const datosPersonas = datos.find();
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   } 
// }
// conectar().catch(console.dir);