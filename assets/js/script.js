//    tempambiente humedadambiental numtrabajadores nivelliquido
console.log(parseInt("50.52"));
function checarAlarma() {
    let temambiente = document.getElementById("tempambiente").value;
    let humedadambiental = document.getElementById("humedadambiental").value;
    let numtrabajadores = document.getElementById("numtrabajadores").value;
    let nivelliquido = document.getElementById("nivelliquido").value;
    let nuevotexto= document.createElement("h1");
    let agregar;
    //para activar la alarma
    if(temambiente> 90 || temambiente<30 || humedadambiental>50 || numtrabajadores>100 || nivelliquido>90){
        nuevotexto.className = " bg-danger";
        agregar = document.createTextNode("Aviso Alarma");
    }else{
        agregar = document.createTextNode("El sistema esta bien");
    }
    nuevotexto.appendChild(agregar);
    let parentElement = document.getElementById('respuestas');
    let theFirstChild = parentElement.firstChild;
    parentElement.insertBefore(nuevotexto, theFirstChild);
}
/**
 * <h1>
 *    Aviso Alarma
 * 
 * </h1>
 */

/* 
1.-umbral superior 90% 
2.-umbral inferior 30%)
3.-si la humedad es superior al 50%, 
4.-si hay más de 100 trabajadores en la planta al mismo tiempo, 
5.-si el nivel del líquido es superior al 90% (para evitar el desbordamiento). */