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