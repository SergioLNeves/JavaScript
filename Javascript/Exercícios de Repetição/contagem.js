//Faça um programa que mostre uma contagem na tela de 233 a 456, só que contando de 3 em 3 
//quando estiver entre 300 e 400 e de 5 em 5 quando não estiver.

let i = 233;

do{
    if (i>=300 && i <= 400){
        i += 3;
    }else{
        i+=5;
    }
    alert(i)
}while(i<=456);
