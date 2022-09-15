//Faça um sistema que leia as 3 notas de um aluno e calcule a média final deste aluno. 
//Considerar que a média é ponderada e que o peso das notas é: 2,3 e 5, respectivamente.



let nota1,nota2,nota3,peso1,peso2,peso3,total;


nota1 =prompt("Digite a primeira nota: ");
nota2 =prompt("Digite a segunda nota: ");
nota3 =prompt("Digite a terceira nota: ");

peso1 =nota1 * 2;
peso2 =nota2 * 3;
peso3 =nota3 * 5;
total =parseInt(peso1)+parseInt(peso2)+parseInt(peso3)

alert("A nota média do aluno é de "+parseInt(total))