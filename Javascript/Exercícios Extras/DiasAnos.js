let dias, meses,anos
dias = prompt("Quantos dias você viveu?: ");

if (dias > 0) {;
    if (dias<= 31){;
        alert("Você viveu apenas " + dias + " dias");
    }if (dias > 31 && dias <= 365){;
        meses = dias / 30;
        mesesexatos = meses / 12;
        alert("Você tem " + parseInt(meses) + " meses \n " + dias + " dias");
    }if (dias > 365){;
        meses = dias / 30;
        anos = dias / 365;
        alert("Você tem " + parseInt(anos) + " anos \n" + parseInt(meses) + "meses \n" + dias + " dias");
    };
}else{;
    alert("Você ainda não nasceu usuário do Futuro");
}