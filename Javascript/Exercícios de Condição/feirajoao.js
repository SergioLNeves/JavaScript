/*João, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho.
Toda vez que ele traz um peso de tomate maior que o estabelecido pelo regulamento do estado de São Paulo
(50 quilos) deve pagar um multa de R$ 4,00 por quilo excedente.
João precisa que você faça um sistema que leia a variável P (peso de tomates)
e verifique se há excesso. Se houver, gravar na variável E (Excesso)
e na variável M o valor da multa que João deverá pagar. 
Caso contrário mostrar tais variáveis com o conteúdo ZERO.*/

let P,E,M;
P =prompt("Quantos Kg de Tomate João está levando dessa vez: ")
if (P > 0){
	if (P > 50){
		E = P - 50
		M = E * 04
		alert("O Excesso foi de "+ parseFloat(E.toFixed(2))+ "KG, aplicando multa..."+
		"\nValor da multa foi de R$"+parseFloat(M.toFixed(2)))
	}else{
		alert("João não excedeu o KG")
	}	
}else{
	alert("João está indo sem levar nada")
}