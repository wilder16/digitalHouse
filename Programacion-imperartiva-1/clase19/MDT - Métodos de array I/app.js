const archivos = require("./lecturaEscritura");
let arrayProfesionales = archivos.leerJson("profesionales");

//A
const nombreEspecialdad = (arr) => arr.forEach( arr => console.table(`${arr.nombre} - ${arr.especialidad}`));
// nombreEspecialdad(arrayProfesionales);

//B
const aumento = (arr) => arr.forEach(arr => Math.round(arr.honorarioConsulta += arr.honorarioConsulta*0.05));
aumento(arrayProfesionales);
// console.table(arrayProfesionales);
//C
const profesionalesDeshabilitados = (arr) => arr.filter(arr => !arr.estaHabilitado);
console.table(profesionalesDeshabilitados(arrayProfesionales));

//D
const profesionaleHabilitados = (arr) => arr.filter(arr => arr.estaHabilitado);
// console.table(profesionaleHabilitados(arrayProfesionales));

//E
const arquitectos = (arr) => arr.filter(arr => arr.especialidad === "Arquitecto");
// console.table(arquitectos(arrayProfesionales));

//F
const habilitandoProfesionales = (arr) => arr.forEach(arr => arr.estaHabilitado = true)
console.table(habilitandoProfesionales(profesionalesDeshabilitados(arrayProfesionales)));



//G

//H


// 1
const ordenarPorCosulta = (a, b) => b.cantidadConsultas - a.cantidadConsultas;
// console.table(arrayProfesionales.sort(ordenarPorCosulta));

// 2
const ordenarPorPuntuacion = (a, b) => b.puntuacion - a.puntuacion;
// console.table(arrayProfesionales.sort(ordenarPorPuntuacion));

// 3
const buscarPorId = (id, arr) => {
    const index = arr.find((arr) => id === arr.identificador);
    return index !== undefined
        ? console.table(index)
        : console.log("El profecional con id " + id + " no existe");
};
// buscarPorId(4, arrayProfesionales);
