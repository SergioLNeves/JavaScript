//Faça um programa que pegue um número do teclado e calcule a soma de todos os números  de 1 até ele.
//Ex.: o usuário entra 7, o programa vai mostrar 28, pois  1+2+3+4+5+6+7=28.

let z,x=1,v=0;

z =prompt("Escolha um número: ")

do{
   alert(x)
   v+=x
   x++
}while(x<=z)

alert(v)