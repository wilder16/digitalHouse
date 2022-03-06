// alert("Soy una alerta"); 
console.log(alert("Soy una alerta en un console.log")); // retorna un undefined

// confirm("Quieres aceptar"); 
console.log(confirm("Quieres aceptar dentro de un console.log")); // retorna true or false

// prompt("Quiero capturar algo");
console.log(prompt("Quiero capturar algo")) // retorna lo que el usuario ingresa si no ingresa nada retorna un null

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let i = 0; i < myArray.length; i++) { sum += myArray[i]; }
console.log(sum);
sum = 0;
myArray.forEach(numero => { sum += numero;});
console.log(sum);