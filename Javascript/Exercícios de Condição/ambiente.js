<<<<<<< HEAD
/*A Secretaria de Meio Ambiente que controla o índice de poluição mantém 3 grupos de indústrias
que são altamente poluentes do meio ambiente. O índice de poluição aceitável varia de 0,05 até 0,25.
Se o índice sobe para 0,3 as indústrias do 1º grupo são intimadas a suspenderem suas atividades, 
se o índice crescer para 0,4 as industrias do 1º e 2º grupo são intimadas a suspenderem suas atividades
, se o índice atingir 0,5 todos os grupos devem ser notificados a paralisarem suas atividades.
Faça um sistema que leia o índice de poluição medido e emita a notificação adequada aos diferentes grupos
 de empresas.*/

 let y;
 y = prompt("Qual o índice da empresa 1: ");
 if (y < 0.3){
    alert("Indice aceitável");
 }else if(y>=0.3 && y <0.4){
    alert("Industrias do 1º são obrigado a suspenderem suas atividades imediatamente!");
 }else if (y>=0.4 && y < 0.5){
    alert("Industrias do 1º e 2º Grupo são obrigados a suspenderem suas atividades imediatamente!");
 }else if (y >= 0.5){
    alert("As Industrias do 1º, 2º e 3º Grupo são obrigados a suspenderem suas atividades imediatamente");
 }else{
    alert("Valor indisponivel");
 }
=======
/*A Secretaria de Meio Ambiente que controla o índice de poluição mantém 3 grupos de indústrias
que são altamente poluentes do meio ambiente. O índice de poluição aceitável varia de 0,05 até 0,25.
Se o índice sobe para 0,3 as indústrias do 1º grupo são intimadas a suspenderem suas atividades, 
se o índice crescer para 0,4 as industrias do 1º e 2º grupo são intimadas a suspenderem suas atividades
, se o índice atingir 0,5 todos os grupos devem ser notificados a paralisarem suas atividades.
Faça um sistema que leia o índice de poluição medido e emita a notificação adequada aos diferentes grupos
 de empresas.*/

 let y;
 y = prompt("Qual o índice da empresa 1: ");
 if (y>= 0.05 && y <= 0.25){
    alert("Indice aceitável");
 }else if(y>=0.3 && y <0.4){
    alert("Industrias do 1º são obrigado a suspenderem suas atividades imediatamente!");
 }else if (y>=0.4 && y < 0.5){
    alert("Industrias do 1º e 2º Grupo são obrigados a suspenderem suas atividades imediatamente!");
 }else if (y >= 0.5){
    alert("As Industrias do 1º, 2º e 3º Grupo são obrigados a suspenderem suas atividades imediatamente");
 }else{
    alert("Valor indisponivel");
 }
>>>>>>> 405556c1fbe70384a92f14e812d21df3d87c54f4
