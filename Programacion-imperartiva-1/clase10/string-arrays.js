let nombre = ["Wilder", "Nehuen", "Pablo"];
let apellido = ["Bernal", "Lopez", "Gutirrez"]

console.log(nombre[2]);

nombre[0] = "Messi";

console.log(nombre[0]);

// agrega elementos al final del array
nombre.push("Diego");

console.log(nombre);

// agrega elementos al inicio del array y pueden ser más de uno a vez
nombre.unshift("Maria");

console.log(nombre);

console.log(nombre.length);

// para eliminar el ultimo elemento del array
nombre.pop();

console.log(nombre);

console.log(nombre.length);

// para eliminar el primer elemento del array  
nombre.shift();
console.log(nombre);

console.log(nombre.length);

// comparación
console.log(nombre.length === apellido.length);

let numbers =[22, 33, 54, 66, 72, 9]
console.log(numbers[numbers.length -1]);


let grupoDeAmigos = [ "Harry", "Ron", "Hermione", "Spiderman", "Hulk", "Ironman","Penélope Glamour", "Pierre Nodoyuna","Patán" ]
console.log(grupoDeAmigos[5]);

let str = "un string cualquiera"
let arrayAleatorio= ["Digital", "House", "true", "string", "123","false", "54", str ]
console.log(arrayAleatorio[arrayAleatorio.length - 1]);


// parte dos
let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]

console.log(peliculas[0]);

let mayusculas 