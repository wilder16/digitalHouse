// 1
const convertidor = (pulgadas) => pulgadas * 2.54;
console.log(convertidor(2));

// 2
const convertidorUrl = (url) => `http://www.${url}.com`;
console.log(convertidorUrl("pepito"));

// 3
const agregandoAdmiracion = (frase) => `¡${frase}!`;
console.log(agregandoAdmiracion("Hola mundo"));

// 4
const anioPerro = (anio) => anio * 7;
console.log(anioPerro(2));

// 5
const horaTrabajo = (sueldo) => sueldo / 40;
console.log(horaTrabajo(1500));

// 6
const imc = (altura, peso) => peso / (altura * altura);
console.log(imc(1.83, 86));

// 7
const mayuscula = (frase) => frase.toUpperCase();
console.log(mayuscula("Wilder Bernal"));

// 8
const tipoParametro = (parametro) => typeof parametro;
console.log(tipoParametro(5));

// 9
const circunferencia = (radio) => 2 * Math.PI * radio;
console.log(circunferencia(5));

// Callbacks
//Array de nombres
const nombres = ["Martin", "Homero", "Cosme", "Steven", "Adam"];
function buscarNombre(nombre, callback) {
    console.log(
        nombres.indexOf(nombre) != -1
            ? `El nombre ${nombre} fue encontrado `
            : callback(nombre)
    );
}

function mostrarResultado(nombre) {
    nombre === ""
        ? console.log("Ingresaste un string vacio")
        : console.log("Nombre no encontrado");
}

//Ejemplo de invocacion
buscarNombre("Martin", mostrarResultado);
