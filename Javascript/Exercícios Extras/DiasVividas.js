let dia,mes,ano,idade,anosdias,diasanos,diasmes,total

dia=prompt("Que dia você nasceu?: ")
mes=prompt("Que mês você nasceu?: ")
ano=prompt("Que ano você nasceu?: ")

idade = 2022 - ano
anosdias = (365*idade)
diasanos = parseInt(anosdias) + parseInt(dia)
diasmes = mes * 31

total = parseInt(diasmes) + parseInt(diasanos)
alert("Você viveu: " + total + " dias")