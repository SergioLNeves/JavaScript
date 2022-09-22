// ------------------------EXEMPLOS------------------


//let identificador = new Array <string>
//let identificador: string[] = []  //#caixa vazia
//let identificador = ['nome','idade','Três','ricos']
//console.log(identificador[1])
/*for(let n = 0; n <= 3 ; n++){
    console.log(identificador[n])          
}
for(let i of identificador){
    console.log(i)
}*/

//identificador.forEach(abacaxi => console.log(abacaxi))

//console.log(identificador);

//identificador.pop(); // remove sempre o Ultimo
//identificador.shift(); //remove sempre o Primeiro
//identificador.splice(1,2);//remove da primeira posição escolhida até a segunda opção escolhida
//identificador.splice(1,2,"sérgio,"luiz")
//console.log(identificador);                                                                            
                                                                                                         
//-----------------------------------------Exercicio 1---------------------------------------------------

/*let Loja: string [] = []

Loja.push('________PRODUTOS _______','Processador-5','Placa mãe - 3','Placa de vídeo - 9', 'Mouse - 2','____________________') //armazenamento

for(let i of Loja){ //apresentação
    console.log(i)
}

Loja.splice(1,4,'Processador - 3','Placa mãe - 2','Placa de vídeo - 4', 'Mouse - 1') //altera

for(let i of Loja){
    console.log(i)
}*/

//-----------------------------------------Soma------------------------------------------------------

//let soma =(variavel1: number, variavel2: number) => variavel1 + variavel2

//console.log((soma(5,5)))

//-----------------------------------------Exercício 2 -----------------------------------------------

let imc = (peso:number,altura:number) =>  peso/(altura**2)
console.log((imc(70,1.80)))