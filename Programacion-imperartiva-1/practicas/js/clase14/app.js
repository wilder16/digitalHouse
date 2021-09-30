let fs = require("fs");

let datos = fs.readFileSync(__dirname + "/prueba.txt", "utf-8"); // nos permite leer un archivo

console.log(datos);

fs.writeFileSync(
    __dirname + "/prueba2.txt",
    "Hola mundo, mi primera escritura en un archivo con js!"
); // reescribe el archivo, si el archivo no exite lo crea

datos = fs.readFileSync(__dirname + "/prueba2.txt", "utf-8");

console.log(datos);

fs.appendFileSync(
    __dirname + "/prueba2.txt",
    " Agregando contenido sin modificar"
); // Agrega texto al final del texto que esté en un archivo

datos = fs.readFileSync(__dirname + "/prueba2.txt", "utf-8");

console.log(datos);

let pelicula = {
    titulo: "Titanic",
    minutos: 560,
};
let peliculaJson = JSON.stringify(pelicula); // convierte un objeto literar a in JSON
fs.writeFileSync(__dirname + "/prueba3.txt", peliculaJson);

// leyendo un archivo JSON 

let peli = JSON.parse(fs.readFileSync(__dirname + "/prueba3.txt", "utf-8"));
// let peli = fs.readFileSync(__dirname + "/prueba3.txt", "utf-8");

console.log(peli);
