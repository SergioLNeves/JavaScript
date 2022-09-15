let filhos,sal100=0,salario,soma=0,mediasal=0.0,mediaF=0,msal=0.0,perc;

for(i=0;i<=5;i++){
    salario=prompt("Digite seu salário: ");
    filhos = prompt("Digite o numero de filhos: ");
    
    soma = parseFloat(soma) + parseFloat(salario);
    mediaF= parseInt(mediaF) + parseInt(filhos);

    if(msal < salario){
        msal= parseFloat(salario);
    }
    if(salario <= 100){
        parseFloat(sal100++);
    }
}
mediasal = soma / 20;
mediaF = parseInt(mediaF)/20;

perc = (parseFloat(sal100) / 20) * 100;
alert("A media do salário da população: " + mediasal.toFixed(2)+ "\nMedia de filhos da população é: "+mediaF.toFixed(2)+"\n Maior salário é de: "+msal.toFixed(2)+"\nMedia de salário menor que 100 Reais é de: "+perc.toFixed(2))

