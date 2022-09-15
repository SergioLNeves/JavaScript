
/*2 - faça um algoritmo que receba um valor que foi depositado e exiba o valor com 
rendimento após um mês. considere fixo o juro da poupança em 0,70% a.m*/

var deposito,rendimento1,rendimento2

deposito =prompt("Qual valor você quer depositar? ")
rendimento1 = deposito * 0.70
rendimento2 = parseInt(deposito) + parseInt(rendimento1)
alert("O valor do rendimento após um mês será de "+ rendimento1 + ", valor total será de "+ rendimento2)	