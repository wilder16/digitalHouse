// funcion con estructura declarada
function sumar1 (a, b) { 
    return a + b
};

// funcion con estructura expresada
let sumar2 = function(a, b) {
    return a  + b;
}

// funcion arrow 
let sumar3 = (a, b) => a + b;

let vector = ["www.google.com","www.yahoo.com"];

let agregarHttp = url =>`http://${url}`;

let procesar = ( array, funcion) => {
    for(let i = 0; i < array.length; i++){
        array[i] = funcion(array[i]);
    }
    return array;
}

console.log(procesar(vector, agregarHttp));