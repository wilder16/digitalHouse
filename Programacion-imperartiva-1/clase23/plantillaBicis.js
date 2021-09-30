const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR

/*******************************/
/* Desarrollo de las consignas */
/*******************************/
const archivo = require("./jsonHelper");
const bicicletas = archivo.leerJson("bicicletas");

// A
const carrera = {
    // B
    bicicletas,
    // C
    bicicletasPorTanda: 4,
    // D
    ciclistasHabilitados: function () {
        return this.bicicletas.filter((bicicletas) => !bicicletas.dopaje);
    },
    // E
    listarBicicletas: function (arr) {
        return arr.forEach((elemento) => {
            console.table(
                `Ciclista: ${elemento.ciclista}, marca: ${
                    elemento.marca
                },  rodado: ${elemento.rodado}, peso: ${
                    elemento.peso
                } kg, largo: ${elemento.largo} cm, estado: ${
                    elemento.dopaje ? `dopaje` : `habilitado`
                }.`
            );
        });
    },
    // F
    buscarPorId: function (id) {
        return this.bicicletas.find((ciclista) => id === ciclista.id);
    },
    // G
    filtrarPorPeso: function (peso) {
        const habilitados = this.ciclistasHabilitados();
        return habilitados.filter((ciclistas) => ciclistas.peso <= peso);
    },
    // H
    ordenarPorRodado: function () {
        return this.bicicletas.sort((a, b) => a.rodado - b.rodado);
    },
    // I
    largoPromedio: function () {
        return console.log(
            "El promedio del largo de los ciclistas es: " +
                this.bicicletas.reduce(
                    (acumulador, valorSiguiente) =>
                        (acumulador += valorSiguiente.largo),
                    0
                ) /
                    this.bicicletas.length
        );
    },
};

// J

// K

// L
/******************************/
/* Ejecución de las consignas */
/******************************/

console.log(v, "\n" + oo + " .D. ");
console.table(carrera.ciclistasHabilitados());
console.log(o);

console.log(v, oo + " .E.");
carrera.listarBicicletas(bicicletas);
console.log(o);

console.log(v, oo + " .F.");
console.table(carrera.buscarPorId(2));
console.log(o);

console.log(v, oo + " .G.");
console.table(carrera.filtrarPorPeso(8));
console.log(o);

console.log(v, oo + " .H.");
console.table(carrera.ordenarPorRodado());
console.log(o);

console.log(v, oo + " .I.");
carrera.largoPromedio();
console.log(o);

console.log(v, oo + " .J. ");
// Ejecución aquí
console.log(o);

console.log(v, oo + " .K. ");
// Ejecución aquí
console.log(o);

console.log(v, oo + " .L. ");
// Ejecución aquí
console.log(o);
