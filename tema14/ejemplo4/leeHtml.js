import { createServer } from 'http';
import * as fs from 'fs';


createServer(function (req, res) {
 fs.readFile('demo1.html', function(err, data) {
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.write(data);
 res.end();
 });
}).listen(8080);

fs.writeFile('prueba1.txt', 'Contenido….', function (err) {
    if (err) throw err;
    console.log('Creado!');
    });
   
