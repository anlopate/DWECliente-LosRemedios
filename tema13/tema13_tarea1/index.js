$(function () {
    var Boton = /** @class */ (function () {
        function Boton(boton) {
            $('#botones').append("<button id='".concat(boton, "'>").concat(boton, "</button>"));
            $("#".concat(boton)).on("click", function () { return alert("Hola desde ".concat(boton)); });
        }
        return Boton;
    }());
    // La clase implementa la interface Accion
    var GrupoBot = /** @class */ (function () {
        // Al llamar a la clase, se crean dos eventos que llaman a los métodos add y rest de la propia clase.
        function GrupoBot() {
            var _this = this;
            this.contador = 0;
            $("#add").on("click", function () { return _this.add(); });
            $("#rest").on("click", function () { return _this.rest(); });
        }
        // El método implementa la clase Boton.
        GrupoBot.prototype.add = function () {
            this.contador++;
            new Boton(this.contador);
        };
        // El método 
        GrupoBot.prototype.rest = function () {
            if (this.contador >= 1) {
                $("#".concat(this.contador)).remove();
                this.contador--;
            }
        };
        return GrupoBot;
    }());
    // La clase boton crea los nuevos botones y la alerta que se muestra al usuario.
    new GrupoBot();
});
