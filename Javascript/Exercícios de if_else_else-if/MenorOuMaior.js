/*Escrever um algoritmo que receba um número e mostre uma mensagem caso
 este número seja maior que 80, menor que 25 ou igual a 40*/

 let x,nota
		x=prompt("De 1 a 10, qual a nota obtida na prova 1: ")
		nota=(x*10)
		if( nota >= 0 && nota <= 10){
			if (nota >= 80)
				alert("Sua nota foi "+nota+" \nVocê está Aprovado!")
			else if (nota >25 && nota < 80)
				alert("Sua nota foi "+nota+" \nvocê está de Recuperação")	
			else if (nota <= 25)
				alert("Sua nota foi "+nota+" \nvocê foi Reprovado")
        }else{
			alert("Programa finalizado por erro no valor")
        }
