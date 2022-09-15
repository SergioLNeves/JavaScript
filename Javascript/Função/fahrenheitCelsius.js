let c,fahrenheit

f = conversor()

function conversor(c){
f = prompt("qual o valor em fahrenheit a ser convertido: ")
fahrenheit = ((f - 32) * 5)/9
return alert("O valor convertido para Fahrenheit é: "+ fahrenheit +"º")
}