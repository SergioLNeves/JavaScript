import { Animal } from "./animal";

export class Preguiça extends Animal {
        especie:string;
        som:string;
        fuga:string;

    constructor(
        Especie:string,
        Nome:string,
        Idade:number,
        EmiteSom:string,
        Fuga:string
    ){
        super(Nome,Idade)
        this.som = EmiteSom
        this.especie = Especie
        this.fuga = Fuga
    }
    verAnimal(){
        console.log(`\n -----${this.especie} \nSe chama ${this.nome}, \nTem ${this.idade} anos de idade`)    
    }
    verEmitesom(){
        console.log(`Ele ${this.som}`)
    }
    verFuga(){
        console.log(`Pra fugir o ${this.especie}, ${this.fuga}`)
    }
}