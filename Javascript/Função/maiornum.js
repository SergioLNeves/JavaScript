let n1,n2,n3,maior,menor;

n1=prompt("Insira o primeiro valor");
n2=prompt("Insira o segundo valor");
n3=prompt("Insira o terceiro valor");

maior=maiordetres();
menor=menordetres();

function maiordetres(n1,n2,n3){
    if(n1>n2 && n1>n3){
        alert(n1+" É o maior valor entre os números")
    }else if(n2>n1 && n2>n3){
        alert(n2+" É o maior valor entre os números")
    }else if(n3>n1 && n3>n2){
        alert(n3+" É o maior valor entre os números")
    }
}

function menordetres(n1,n2,n3){
    if(n1<n2 && n1<n3){
        alert(n1+" É menor valor entre os números")
    }else if(n2<n1 && n2 < n3){
        alert(n2+" É menor valor entre os números")
    }else if(n3<n1 && n3 < n2){
        alert(n3+" É menor valor entre os números")
    }
}