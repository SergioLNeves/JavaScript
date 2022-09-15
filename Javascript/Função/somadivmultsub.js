let z,x,total,A,B,C,D;

z=prompt("digite o primeiro número: ");
x=prompt("digite o segundo número: ");

total = contas(z,x)

function contas(z,x){
    A=parseInt(z) + parseInt(x);
    B=parseInt(z) - parseInt(x);
    C=parseInt(z) * parseInt(x);
    D=parseInt(z) / parseInt(x);
  //  return alert("Soma = "+A+"\nSubtração = "+B+"\nMultiplicação = "+C+"\nDivisão = " + D)
    console.log("Soma = "+A+"\nSubtração = "+B+"\nMultiplicação = "+C+"\nDivisão = " + D)
}
