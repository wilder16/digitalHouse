// operador ternarios 
// condicion ? accion por verdadero : accion por falso

let dia = "lunes";
let resultado = dia == "lunes" ? "inicio de semana": "no es lunes";

console.log( resultado );

// switch 

switch( expresion ){
    case valorA:
        // codigo a ejecutar si la expresión es igual a valorA
        break; // break evita que se ejecute la siguiente sentencia
    case valorB:
        // codigo a ejecutar si la expresión es igual a valorB
        break;
    default:
        // codigo a ejecutar si ningún caso es verdadero, no es necesario escribir el breack
}
// agrupacion de casos 
switch( expresion ){
    case valorA:
    case valorB:
        // codigo a ejecutar si la expresión es igual a a valorA y valorB
        break;
    default:
}