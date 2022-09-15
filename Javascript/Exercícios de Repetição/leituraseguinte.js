let num=0.0,soma=0.0,media,total=0.0;
 
while(num>=0){ //verifica o valor do numero dentro do while
    num = prompt("Digite o numero: ");//modifica o valor num

    if (num >= 0){ //se o valor entrar no if reproduz
        soma = parseInt(soma)+ parseInt(num)
        total++
    }
}

media = soma / total;

alert("Soma de todos os numeros digitados: " +soma+"\nMedia de todos numeros digitados: "+ media.toFixed(2)+"\nTotal de numeros digitados: "+ total)