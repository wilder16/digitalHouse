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

const ordenarPorCosulta = () => {
    arrayProfesionales.sort((a, b) => {
        if (a.cantidadConsultas < b.cantidadConsultas) {
            return 1;
        }
        if (a.cantidadConsultas > b.cantidadConsultas) {
            return -1;
        }
        return 0;
    });
    return arrayProfesionales;
};

const ordenarPorPuntuacion = () => {
    arrayProfesionales.sort((a, b) => {
        if (a.puntuacion < b.puntuacion) {
            return 1;
        }
        if (a.puntuacion > b.puntuacion) {
            return -1;
        }
        return 0;
    });
    return arrayProfesionales;
};

console.log(ordenarPorPuntuacion());

const buscarPorId = (id) => {
    const index = arrayProfesionales.findIndex(
        (arrayProfesionales) => id === arrayProfesionales.identificador
    );
    return index !== -1
        ? console.log(arrayProfesionales[index])
        : console.log(`El procional con identificadro ${id} no exite`);
};
buscarPorId(100);

