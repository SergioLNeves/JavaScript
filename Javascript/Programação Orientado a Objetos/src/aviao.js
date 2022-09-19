"use strict";
exports.__esModule = true;
exports.Aviao = void 0;
var Aviao = /** @class */ (function () {
    function Aviao(Marca, Cor, Vagas, Piloto) {
        this.Marca = Marca;
        this.Cor = Cor;
        this.Vagas = Vagas;
        this.Piloto = Piloto;
    }
    Aviao.prototype.verSaldo = function () {
        console.log("O avi\u00E3o da marca: ".concat(this.Marca, " \nDa Cor ").concat(this.Cor, " \nComporta ").concat(this.Vagas, " \nPiloto: ").concat(this.Piloto, " \n"));
    };
    return Aviao;
}());
exports.Aviao = Aviao;
