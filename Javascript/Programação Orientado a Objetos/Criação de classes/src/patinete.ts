export class Patinete {
    Cor: string;
    Marca: string;
    Tamanho: string;
    Rodas: number;

    constructor(
        Cor: string,
        Marca: string,
        Tamanho: string,
        Rodas: number
    ){
        this.Cor = Cor
        this.Marca = Marca
        this.Tamanho = Tamanho
        this.Rodas = Rodas
    }

    confere(){
        console.log(`A marca do patinete: ${this.Marca} \nSeu tamanho: ${this.Tamanho} \nSua cor: ${this.Cor} \nContém ${this.Rodas} Rodas`)
    }

    mh(Rodas: number){
        if (Rodas > 0 && Rodas <= 4){
            let Metros = Rodas * Rodas
            console.log(`Seu patinete consegue percorrer ${Metros} metros por segundos`)
        }else{
            console.log(`Você não consegue percorrer sem rodas`)
        }
    }
}   
