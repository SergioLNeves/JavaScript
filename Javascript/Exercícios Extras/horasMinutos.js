/*Faça um sistema que leia o tempo de duração de um evento em uma fábrica 
expressa em segundos e mostre-o expresso em horas, minutos e segundos*/

let horas,minutos,segundos,tempo

tempo = prompt("Quantas Tempo em segundos durou o evento: ");

if (tempo > 0){;
    if (tempo < 3600){;
        minutos = tempo / 60;
        segundos = tempo % 60;
        alert("O evento teve a duração de " + parseInt(minutos) + " minutos e " + segundos + " segundos.");
    };
    if (tempo >= 3600 ){;
        horas = tempo / 3600;
        minutos = tempo / 60;
        segundos = tempo % 60;
        alert("O evento teve a duração de " + parseInt(horas) + " horas e " + parseInt(minutos) + " minutos e " + segundos + " segundos.");
    };
}else{;
    alert("Valor inválido, insira um valor acima de 0 segundos!!");
};
