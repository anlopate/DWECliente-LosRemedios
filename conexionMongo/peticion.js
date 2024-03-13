let name = document.querySelector("#nombre");
let apell = document.getElementById("apellido");
let tabla = document.getElementById("datos");

function enviarDatos(e){
   e.preventDefault();
    const url = '/enviarDatos';
    const datos = {
        nombre: name.value,
        apellidos: apell.value
    };
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(result => result.json())
    .then(result =>{
        result.forEach(element => {
            let fila = document.createElement('tr');

            // // Crear y agregar celdas de encabezado para el nombre
            // let celdaNombreEncabezado = document.createElement('th');
            // celdaNombreEncabezado.textContent = 'Nombre:';
            // fila.appendChild(celdaNombreEncabezado);

            // Crear y agregar celdas de datos para el nombre
            let celdaNombreDato = document.createElement('td');
            celdaNombreDato.textContent = element.nombre;
            fila.appendChild(celdaNombreDato);

            // // Crear y agregar celdas de encabezado para el apellido
            // let celdaApellidoEncabezado = document.createElement('th');
            // celdaApellidoEncabezado.textContent = 'Apellido:';
            // fila.appendChild(celdaApellidoEncabezado);

            // Crear y agregar celdas de datos para el apellido
            let celdaApellidoDato = document.createElement('td');
            celdaApellidoDato.textContent = element.apellidos;
            fila.appendChild(celdaApellidoDato);

            // Agregar la fila a la tabla
            tabla.appendChild(fila);
            
        });
    })
    tabla.innerHTML = "";
}
document.getElementById("formulario").addEventListener("submit",  enviarDatos);
enviarDatos();