//-----------------------------------------PESSOA--------------------------------------------------

/*import { Pessoa } from "./src/pessoa";

let pessoa1 = new Pessoa();

pessoa1.nome ="Sérgio";
pessoa1.idade = 21;
pessoa1.cpf = "103.201.394-24";
pessoa1.telefone = "(21) 9 9284-1908";

console.log(`O nome da pessoa é: ${pessoa1.nome}` );
console.log(`A sua idade é: ${pessoa1.idade}`);
console.log(`Seu cpf é: ${pessoa1.cpf}`);
console.log(`Seu telefone de contato é: ${pessoa1.telefone}`);*/

//---------------------------------------CONTA BANCO-----------------------------------------------

/*import { ContaBanco } from "./src/contaBanco"  


let contabanco1 = new ContaBanco("Sérgio","005-4","4002-39",500.00);

contabanco1.deposito(200)
contabanco1.verSaldo()
contabanco1.sacar(300)
contabanco1.verSaldo()*/

//---------------------------------------CLIENTE---------------------------------------------------

/*import { Cliente } from "./src/cliente";

let cliente1 = new Cliente("Sérgio Luiz","192.350.970-07",11)

cliente1.verCliente()*/

//---------------------------------------AVIAO-----------------------------------------------------

/*import { Aviao } from "./src/aviao";

let avião = new Aviao("GOL","Branco",120,"Marcos")

avião.verSaldo()*/

//---------------------------------------PATINETE--------------------------------------------------

/*import { Patinete } from "./src/Patinete";

let patinete1 = new Patinete("Vermelho","BIBI","Grande",3);

patinete1.confere()
patinete1.mh(3);*/

//---------------------------------------Bancaria--------------------------------------------------

/*import { Bancaria } from "./src/bancaria";

let cliente1 = new Bancaria("Sérgio","NuBank","122390-32",124,"4024 0071 5589 1707",23.05,500.00)

cliente1.conferirClient()
cliente1.deposito(200.50)
cliente1.depositoCofre(400)
cliente1.saqueCofre(200)
cliente1.verSaldo()*/

//----------------------------------COMPORTAMENTO ANIMAL-------------------------------------------

import { Cachorro } from "./src/cachorro";
import { Cavalo } from "./src/cavalo";
import { Preguiça } from "./src/preguiça";

let cavalo = new Cavalo("Cavalo","Pangaré",5,"Relincha","Galopa");
let cachorro = new Cachorro("Cachorro","Spyke",10,"Late","Corre");
let preguiça = new Preguiça("Preguiça","Lentinho",15,"faz um som agudo","Sobe em árvore");

cachorro.verAnimal();
cachorro.verEmitesom();
cachorro.verFuga();

cavalo.verAnimal();
cavalo.verEmitesom();
cavalo.verFuga();

preguiça.verAnimal();
preguiça.verEmitesom();
preguiça.verFuga();

//---------------------------------------------------------------------------------------