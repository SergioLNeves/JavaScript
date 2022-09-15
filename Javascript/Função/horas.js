let horas,minutos;

do{
    horas = prompt("Insira as horas(HH): ");
    minutos = prompt("Insira os minutos(MM): ");
    total = horariototal(horas,minutos)
    sair = prompt("Digite 1 para continuar")
}while(sair==1)

function horariototal(horas,minutos){
    if (horas >= 0 && horas <=11){
        if (horas == 00){
            alert("As horas convertidas são de 12" + ":"+minutos+" AM");
        }else{
            alert("As horas convertidas são de " + horas + ":"+minutos+" AM")
        }
    }else if (horas >= 12 && horas <=23){
        if (horas == 12){
            alert("As horas convertidas são de 12" + ":"+minutos+" PM");
        }else{
        horas = horas - 12
        alert("As horas convertidas são de " + horas + ":"+minutos+" PM")
        }
    }
}