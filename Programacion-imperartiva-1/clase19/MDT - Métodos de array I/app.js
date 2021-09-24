const archivos = require("./lecturaEscritura");
let arrayProfesionales = archivos.leerJson("profesionales");

//A

//B

//C

//D

//E

//F

//G

//H

const ordenarPorCosulta = (a, b) => b.cantidadConsultas - a.cantidadConsultas;
console.table(arrayProfesionales.sort(ordenarPorCosulta));

const ordenarPorPuntuacion = (a, b) => b.puntuacion - a.puntuacion;
console.table(arrayProfesionales.sort(ordenarPorPuntuacion));

const buscarPorId = (id) => {
    const index = arrayProfesionales.findIndex(
        (arrayProfesionales) => id === arrayProfesionales.identificador
    );
    return index !== -1
        ? console.table(arrayProfesionales[index])
        : console.table(`El procional con identificadro ${id} no exite`);
};
// buscarPorId(100);

const buscarPorId2 = (id, arr) => {
    const index = arr.find((arr) => id === arr.identificador);
    return index !== undefined
        ? console.table(index)
        : console.log("El profecional con id " + id + " no existe");
};
buscarPorId2(4, arrayProfesionales);
