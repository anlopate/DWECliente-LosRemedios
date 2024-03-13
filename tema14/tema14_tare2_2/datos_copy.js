var nmbre = document.getElementById("nombre").value;
var surname= document.getElementById("apellido").value;
var tabla =  document.getElementById("tabla");
var boton = document.getElementById("enviar");

// Al pulsar el boton enviar, se envían los datos del formulario por POST al servidor
boton.addEventListener("click", function(){
    async function enviar_datos(valor){
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
                        document.getElementById("tabla").appendChild(fila);
                    });
                    })
    }
})