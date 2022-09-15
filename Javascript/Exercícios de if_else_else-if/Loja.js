/*Faça um Algoritmo que receba o preço de custo de um produto 
e mostre o valor da venda. sabe-se que o preço de custo receberá um acréscimo
de acordo com um percentual informado pelo usuário*/


var x ,total1,total2,total3
var quantidade, z, c
const mouse = 165.00
const memoria = 200.00
const teclado = 300.00
		
	c =prompt("Qual Produto você Deseja?" 
	+"\n 1- Mouse Logitch G502 por R$ 165,00"+
	"\n 2- Teclado RedDragon RGB Mecânico por R$ 300,00"+
	"\n 3- Memoria ram DDR4 4gb HyperX por R$200,00 \n")
		if (c == 1){
			z =prompt("Quantidade do produto ")
			total1 = parseInt(z)*parseFloat(mouse)
			total2= total1 * 0.05
			total3= parseFloat(total1)+parseFloat(total2)
			alert("O valor total da compra com frete é de : "+total3)	
        }else if (c == 2){
			z=prompt("Quantidade do produto ")
			total1 = parseInt(z)*parseFloat(teclado)
			total2= total1 * 0.05
			total3= parseFloat(total1)+parseFloat(total2)
			alert("O valor total da compra com frete é de : " + total3)
        }else if (c == 3){
			z=prompt("Quantidade do produto ")
			total1 = parseInt(z)*parseFloat(memoria)
			total2= total1 * 0.05
			total3= parseFloat(total1)+parseFloat(total2)
			alert("O valor total da compra com frete é de : " + total3)
        }