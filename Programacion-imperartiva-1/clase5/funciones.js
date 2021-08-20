function convertirCm(pulgada){
    return pulgada * 2.54 + " CM";
}
console.log(convertirCm(2));

function convertirUrl(nombre){
    return ("http://www." + nombre + ".com");
}

console.log(convertirUrl("pepito"));

function admiracion(frase){
    return (frase + "!");
}
console.log(admiracion("Hola mundo"));

function edadPerro(edad){ 
    return edad * 7;
}
console.log(edadPerro(5));

function horaTrabajo(sueldoMensual){
    return sueldoMensual/40;
}
console.log(horaTrabajo(15000));

function calculadorIMC(altura, peso){
    return (peso/(altura*altura));
}
console.log(calculadorIMC(1.83, 85));

function convertirMayuscula(frase){
    return frase.toUpperCase() ;
}
console.log(convertirMayuscula("wilder bernal"));

function tipoDato(dato){
    return typeof(dato);
}
console.log(tipoDato(1));

function circunferencia(radio){
    return (Math.PI * radio*radio).toFixed(2);
}

console.log(circunferencia(2));