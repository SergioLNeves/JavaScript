import { ContaBanco } from "./contaBanco";

export class Bancaria extends ContaBanco {
    Banco: string;
    Digito: number;
    Cofre: number;

    constructor(
        titular: string, //Sérgio
        Banco: string, //NuBank
        agencia: string, //21104-2
        Digito: number, //234
        conta: string, //125-899
        Cofre:number, // 11.00
        saldo: number //500.00
    ){
       super(titular,agencia,conta,saldo)
       this.Banco = Banco;
       this.Digito = Digito;
       this.Cofre = Cofre;
       
    }

    verSaldo(){
        console.log(`-O Saldo disponível é de R$${this.saldo} \ne o Saldo Guardado é de R$${this.Cofre}`)
    }

    conferirClient(){
        console.log(`-Banco utilizado: ${this.Banco}\nNome: ${this.titular}\nAgencia: ${this.agencia}\nNumero da conta: ${this.conta}\nDigito: ${this.Digito}\nSaldo: R$${this.saldo} \nCofre: R$${this.Cofre}`)
    }
    depositoCofre(Cofre:number){
       if (Cofre > 0 && Cofre <= this.saldo){
            this.saldo -= Cofre
            this.Cofre += Cofre
            console.log(`-Valor Depositado com sucesso \nValor total no cofre é de ${this.Cofre} \nSaldo de sua conta R$${this.saldo}`)
       }else{
        console.log(`-Deposito de R$${Cofre} impossivel de ser realizado`)
       }
    }
    saqueCofre(Cofre:number){
        if (Cofre > 0 && Cofre <= this.saldo){
            this.Cofre -= Cofre
            this.saldo += Cofre
            console.log(`-Valor retirado do Cofre com sucesso \nValor total no cofre é de ${this.Cofre} \nSaldo de sua conta R$${this.saldo}`)
        }else{
            console.log(`-Saque de R$${Cofre} impossivel de ser realizado`)
        }
    }
}

