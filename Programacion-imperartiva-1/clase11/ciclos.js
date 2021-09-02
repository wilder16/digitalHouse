let peliculas = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"]; // array principal 


// Ejercicio 1 
// función que convierte todo a mayuscula de un array
function mayuscula( array ) {
    for ( let i = 0; i < array.length; i++ ) {
        array[i] = array[i].toUpperCase(); 
    }
    return array; 
}
console.log( mayuscula( peliculas ) );

// Ejercicio 2 
// funcion que pasa los elementos de un vector a otro 
let vectorVacio = ["Hola Mundo!"];
function pasajeDeElementos( array1, array2 ) {
    for ( let i of array2 ) {
        array1.push( i.toUpperCase() )
    }
    return array1
}
console.log( pasajeDeElementos(vectorVacio, peliculas) );


// Ejercicio 3 
// funcion que elimina un elemento en especifico de un array y luego llena a otro array con solo los elementos deseados 
let vectorVacio2 = [];
function eliminarElemento ( elemento, arrayParallenar, array2 ) {
    if(array2.indexOf(elemento) !== -1) {
        array2.splice(array2.indexOf(elemento), 1);
    } else { 
        console.log("El elemento no se encuentra en el vector");
    }
    return pasajeDeElementos(arrayParallenar, array2);
}
console.log(eliminarElemento("LA VIDA ES BELLA", vectorVacio2, peliculas));

// Ejercicio 4
// funcion que compara elementos de los vectores 
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 

function compararCalificaciones(asia, europa) {
    let comparacionesAsiaEuropa = []
    for(let i = 0; i < asia.length; i++ ){
        comparacionesAsiaEuropa[i] = asia[i] === europa[i];
    }
    return comparacionesAsiaEuropa
}

console.log(compararCalificaciones(asiaScores, euroScores));


