let z,x,total;

z = prompt("Digite um valor: ")
x = prompt("Digite o valor da porcentagem: ")
porcentagem(z,x)
function porcentagem(z,x) {
    porcentagem = (z / 100) * x
    return alert(porcentagem+"%")

}
