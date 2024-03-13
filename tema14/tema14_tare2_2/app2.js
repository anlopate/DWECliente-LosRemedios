var nmbre = document.getElementById("nombre").value;
var surname= document.getElementById("apellido").value;
var tabla =  document.getElementById("tabla");
var boton = document.getElementById("enviar");

// Al pulsar el boton enviar, se envían los datos del formulario por POST al servidor
boton.addEventListener("click", function(){
            datos = {
                nombre: nmbre,
                apellidos: surname
            }

            fetch('/enviarDatos', {
                method: 'POST',
                body: JSON.stringfy(datos),
                headers: { 'Content-Type': 'application/json'}
                })
                .then(result => result.json())
                .then(function(obj){
                    const fila = '<tr><th>Nombre: </th><td>${obj.nombre}</td></tr><tr><th>Apellido: </th><td>${obj.apellidos}</td></tr>';
                    obj.forEach(element => {
                        tabla.appendChild(fila);
                    });
                    })
    })

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
  
  app.post('/enviarDatos', (req, res) => {
    try{
      const name = req.body.nombre;
      const surname = req.body.apellidos;
      
      collection.insertOne({nombre:name, apellidos:surname}, (err, result) => {
        if (err) throw err;
        res.send("Datos enviados correctamente");
      });
    }catch(err){
      console.error("Los datos no han sido enviados");
    }
  });

app.use('/', router);
app.use(express.static(__dirname));
app.listen(3000);
console.log('Escuchando en puerto 3000');