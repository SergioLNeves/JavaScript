/*Elabore um sistema que dada a idade de um nadador classifique-o em uma das seguintes categorias:
Infantil A = 5 a 7 anos
Infantil B = 8 a 11 anos
Juvenil A = 12 a 13 anos
Juvenil B = 14 a 17 anos
Adultos = Maiores de 18 anos*/

let i;
i=prompt("Insira a idade do cadastrante: ")
if (i<5){
    alert("não ensinamos crianças abaixo de 5 anos de idade")
}else if(i>= 5 && i <= 7){
    alert("Infantil A")	
}else if(i >= 8 && i<=11){
    alert("Infantil B")
}else if(i >= 12 && i <= 13){
    alert("Juvenil A")	
}else if(i >= 14 && i <= 17){
    alert("Juvenil B")
}else if(i >= 18 && i < 80){
    alert("Adulto")
}else if(i >= 80){
    alert("Não apto a natação")
}

