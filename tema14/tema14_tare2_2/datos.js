var nombre = document.getElementById("nombre").value;
var apellido = document.getElementById("apellido").value;
var botonEnviar = document.getElementById("enviar");

// Al pulsar el boton enviar, se envían los datos del formulario por POST al servidor
document.getElementById("enviar").addEventListener("click", function (){
fetch('/enviarDatos', {
    method: 'POST',
    body: JSON.stringfy({nombre, apellido}),
    headers: { 'Content-Type': 'application/json'}
    })
    .then (response=> {
        if( response){
            console.log("Datos enviado correctamente");
        }else{
            console.error("Error al enviar los datos");
        }
    })
    mostrarDatos();
})

// Al pulsar el boton mostrar, se recogen los datos de la bbdd y se muestren en una tabla. 
function mostrarDatos (){
    fetch('/mostrarDatos')
        .then(result => result.json())
        .then(function(obj){
            document.getElementById("tabla").innerHTML = '<tr><th>Nombre: </th><td>${obj.nombre}</td></tr><tr><th>Apellido: </th><td>${obj.apellidos}</td></tr>'});
    }
