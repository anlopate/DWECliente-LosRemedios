import express from 'express';
import path from 'path';

var app = express();
var router = express.Router(); // express() y express.Router() hacen lo mismo pero Router añade más funcionalidades.
var __dirname = path.resolve();


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.get('/pagAjax', function(req, res){

    var datos = {
        "nombre": 'Ana',
        "apellido": 'López'
    };
   
    res.json(datos);
});

app.use('/', router);
app.use(express.static(__dirname));
app.listen(3000);
console.log('Escuchando en puerto 3000');


