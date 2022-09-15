/*Elabore um sistema que leia as variáveis C e N,
respectivamente código e número de horas trabalhadas de um operário.
E calcule o salário sabendo-se que ele ganha R$ 10,00 por hora.
Quando o número de horas exceder a 50 calcule o excesso de pagamento armazenando-o na variável E
caso contrário zerar tal variável. A hora excedente de trabalho vale R$ 20,00.
No final do processamento imprimir o salário total e o salário excedente.*/


let C,N,E
N=prompt("Quantas horas trabalhada: ")
C = N * 10.00
if (C > 0){
	if (N > 50){
		E = N - 50
		alert("Salário Total: "+ C +"\nSalário + Extra: "+ (E * 20.00 + parseInt(C)))
	}else{
		alert("Salário Total: "+ C +"\nNão houve hora Extra ")
	}
}else{
	alert("Não há salário pra quem não trabalha")
}