
/* SERVIDOR CREADO CON HTTP */

// guardamos el módulo http de Node en la constante http.
const http = require ('http');

// Guardamos el servidor que vamos a crear en una constante.
// req, petición, res,respuesta del servidor.
const server = http.createServer((req, res) => {
    console.log('Servidor funcionando');
    res.end('La conexión correcta.');
})

// primer parámetro puerto de escucha. Segundo parámetro es una función que se ejecuta cuando el servidor 
// está listo para recibir conexiones.
server.listen(3000, () =>{
    console.log("Servidor a la espera de conexiones...");
})