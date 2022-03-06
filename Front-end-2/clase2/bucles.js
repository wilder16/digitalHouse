// for in: solo itera sobre objetos literales
let personaje = {
    nombre: "Wilder",
    apellido: "Bernal",
    edad: 25
}

for( let caracteristica in personaje ){
    console.log(caracteristica); // muestra las propiedades del objeto literal
    console.log(personaje[caracteristica]); // muestra el resultado de las propiedades del objeto literal simulando que el objeto literal es un array
}

// for of itera sobre array

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let acumulador = 0; 
for( let iterador of numeros ){
    acumulador +=iterador;
}
console.log(acumulador);



let myString = "Soy un string";

for ( let iterador in myString ){
    console.log(iterador, myString[iterador]);
}

for (let iterador of myString){
    console.log(iterador);
}