//Crie uma um programa de saúde, nesse programa desenvolva uma função que calcula o imc de pacientes,
//a função deverá receber os  seguintes parâmetros, peso e altura.

let peso,altura,imc;

imc=indice()

function indice(){
    peso=prompt("Digite o peso do paciente: ")
    altura=prompt("Digite a altura do paciente: ")
    calculo = peso/(altura**2);
    alert(calculo.tofixed(2));
}