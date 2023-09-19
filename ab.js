var nombre = prompt("Bienvenido al cuestionario de la primavera. \n  Inserta tu nombre");
var resp1 = prompt("¿Cómo se llama al primer día de la Primavera? \n A: Primer Día de la Primavera \n B: Equinoccio de Primavera \n C: Equinoccio de Invierno" );
if (resp1 == "B"){
    resp1 = 25;

}
else if(resp1 == "A"){
    resp1 = 0
}
else if( resp1 == "C"){
    resp1 = 0
}
else{
    alert(nombre+", esta no es una respuesta valida")

}
var resp2 = prompt("¿Qué sucede en el Polo Norte cuando llega la Primavera? \n A: 6 meses de luz diurna ininterrumpida \n B: 6 meses de oscuridad inimterrumpida \n C: 6 meses de alternancia de luz y oscuridad");
if (resp2 == "A"){
    resp2 = 25;

}
else if(resp2 == "C"){
    resp2 = 0
}
else if( resp2 == "B"){
    resp2 = 0
}
else{
    alert(nombre+", esta no es una respuesta valida")

}
var respt3 = prompt("¿En qué mes empieza la Primavera en el Hemisferio Norte? \n A: Setiembre \n B: Junio \n C. Marzo");
if (respt3 == "C"){
    respt3 = 25;

}
else if(respt3 == "A"){
    respt3 = 0
}
else if( respt3 == "B"){
    respt3 = 0
}
else{
    alert(nombre+", esta no es una respuesta valida")

}
var respt4 = prompt("¿Qué es la Fiesta de la Primavera en China? \n A: La Navidad \n B: El Año Nuevo \nC. Fiestas Patrias de China");

if (respt4 == "B"){
    respt4 = 25;

}
else if(respt4 == "C"){
    respt4 = 0
}
else if( respt4 == "A"){
    respt4 = 0
}
else{
    alert(nombre+", esta no es una respuesta valida")

}
var total = resp1 + resp2 + respt3 + respt4
document.write("conseguiste un puntaje de" +total)
