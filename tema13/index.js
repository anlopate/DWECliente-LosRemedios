"use strict";
// Decoradores
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Modifica constructor de la clase
function decorClase(target) {
    return function () { console.log('Constructor modificado'); };
}
// Modifica método de la clase
function decorMetodo(target, propName, descriptor = {}) {
    descriptor.value = function () { console.log('Método modificado'); };
    return descriptor;
}
// @decorClase
class MiClase {
    constructor() {
        console.log('Constructor de clase');
    }
    get() { console.log('Método de clase'); }
    ;
}
__decorate([
    decorMetodo,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MiClase.prototype, "get", null);
var dat = new MiClase();
dat.get();
