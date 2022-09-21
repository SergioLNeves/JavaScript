"use strict";
exports.__esModule = true;
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(nome, cpf, id) {
        this.nome = nome;
        this.cpf = cpf;
        this.id = id;
    }
    Cliente.prototype.verCliente = function () {
        console.log("Cliente ".concat(this.nome, " \nid ").concat(this.id, " \ncpf ").concat(this.cpf));
    };
    return Cliente;
}());
exports.Cliente = Cliente;
