$(function(){

// La interface define los métodos que debe implementar la clase.
interface Accion {
    add(): void;
    rest(): void;
}

class Boton {
    
    constructor(boton: number) {
        $('#botones').append(`<button id='${boton}'>${boton}</button>`);
        $(`#${boton}`).on("click",():void=>alert(`Hola desde ${boton}`));
        }
    }
// La clase implementa la interface Accion
class GrupoBot implements Accion {
    
    private contador: number = 0;
   // Al llamar a la clase, se crean dos eventos que llaman a los métodos add y rest de la propia clase.
    constructor(){
        $("#add").on("click",()=>this.add());
        $("#rest").on("click", ()=>this.rest());
    }
  // El método implementa la clase Boton.
    add(): void {
        this.contador++;
        new Boton(this.contador);
    }
  // El método 
    rest(): void {
           if(this.contador>=1){
            $(`#${this.contador}`).remove();
            this.contador--;
           }
        }
    }
 // La clase boton crea los nuevos botones y la alerta que se muestra al usuario.
   
new GrupoBot();

   
});
