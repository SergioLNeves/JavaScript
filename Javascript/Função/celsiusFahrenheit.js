let c,fahrenheit

c = conversor()

function conversor(c){
c = prompt("qual o valor em celcius a ser convertido: ")
fahrenheit = ((c * 9) / 5) + 32
alert("O valor convertido para Fahrenheit é: "+ fahrenheit +"º")
}