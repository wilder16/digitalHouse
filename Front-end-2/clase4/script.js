// Selectores de elementos 
// document.querySelector(); // Selecciona el primer elemeto que cumple la condicion
// document.querySelectorAll(); // Selecciona a todos los elementos que cumplen la condicion 
// Si el elemento no existe retornará null
let titulo = document.querySelector('h1'); 
console.log(titulo);

let  elementos = document.querySelectorAll('li')
console.log(elementos);

let parrafos = document.querySelectorAll('p')
console.log(parrafos);

for (const iterator of parrafos) {
    console.log(iterator);
}

let strong = document.querySelector('p strong');
console.log(strong);