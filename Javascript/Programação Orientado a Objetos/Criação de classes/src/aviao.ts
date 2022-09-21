export class Aviao {
    Marca: string;
    Cor: string;
    Vagas: number;
    Piloto: string;

    constructor(
        Marca: string,
        Cor: string,
        Vagas: number,
        Piloto: string
    ){
        this.Marca = Marca
        this.Cor = Cor
        this.Vagas = Vagas
        this.Piloto = Piloto
    }

    verSaldo(){ // Metodos
        console.log(`O avião da marca: ${this.Marca} \nDa Cor ${this.Cor} \nComporta ${this.Vagas} \nPiloto: ${this.Piloto} \n`)
    }
}