//Crie um programa de saúde que trabalhe com variáveis que recebam dados de
//peso, nome, altura, data de internação e uma variável que receba o dado se
// o paciente é diabético ou não.

let peso,nome,altura,data
var diabetico

nome =prompt("Insira o nome do paciente: ")
console.log(nome)
peso =prompt("Insira o peso do paciente: ")
console.log(peso)
altura =prompt("Insira a altura do paciente: ")
console.log(altura)
data =prompt("Insira a data de Internação: ")
console.log(data)
diabetico =prompt("O paciente é diabético: \nS/sim \nN/não")
console.log(diabetico)

if (diabetico == "S" || diabetico == "s" || diabetico == "N" || diabetico == "sim" || diabetico == "nao" || diabetico == "não" || diabetico == "n"){
    if (diabetico == "S" || diabetico == "sim" || diabetico == "s" ){
        alert("O Paciente " + nome + "\nAltura: " + altura + "\nPeso: " + peso + "\nData de Internação: " + data + "\nDiabetes: Positivo")
    }ifelse(diabetico == "N" || diabetico == "não" || diabetico || "nao"|| diabetico == "n")
        alert("O Paciente " + nome + "\nAltura: " + altura + "\nPeso: " + peso + "\nData de Internação: " + data + "\nDiabetes: Negativo")
}else{
    alert("Valor informado incorreto")
}
