var buscador = navigator.userAgent;
var palabra;

if (buscador.indexOf("Chrome") >-1){
    palabra = "Estas usando google chrome en la version mas reciente"
}
else{
    palabra = "No se cual es tu navegador"
}

document.getElementById("navegador").innerHTML = palabra;