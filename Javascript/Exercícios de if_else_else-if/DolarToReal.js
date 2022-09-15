/*Faça um algoritmo que efetua a apresentação do valor da conversão em real (R$)
de um valor lido em dólar (US$).
o algoritmo deverá solicitar o valor da cotação do dólar.*/

let dolar, reais

dolar =prompt("Insira o valor em dólar: ")
reais = parseFloat(dolar) * 5.04
alert("O valor em real é de R$ "+parseFloat(reais))