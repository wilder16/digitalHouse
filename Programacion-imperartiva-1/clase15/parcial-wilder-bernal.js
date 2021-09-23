const v = "\x1b[32m%s\x1b[0m";
const o = "*".repeat(80) + "\n";
const oo = "*".repeat(25);
// Te proveemos la siguiente plantilla que tiene tres partes:
// - Array de objetos que está colapsado aquí debajo.
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Wilder de Jesús Bernal López";
const tema = "TEMA 1";

const profesionales = [
    {
        id: 0,
        estaHabilitado: false,
        honorarioConsulta: 2007.68,
        edad: 29,
        nombre: "huber Wilkins",
        email: "huberwilkins@speedbolt.com",
        especialidad: "Neumonologia",
        cantidadConsultas: 0,
        puntaje: 8,
    },
    {
        id: 1,
        estaHabilitado: true,
        honorarioConsulta: 2325.56,
        edad: 21,
        nombre: "goldie Haley",
        email: "goldiehaley@speedbolt.com",
        especialidad: "Cardiologia",
        cantidadConsultas: 0,
        puntaje: 7,
    },
    {
        id: 2,
        estaHabilitado: false,
        honorarioConsulta: 2208.17,
        edad: 36,
        nombre: "pena Landry",
        email: "penalandry@speedbolt.com",
        especialidad: "Dermatologia",
        cantidadConsultas: 0,
        puntaje: 7,
    },
    {
        id: 3,
        estaHabilitado: false,
        honorarioConsulta: 3266.71,
        edad: 20,
        nombre: "leanne Burch",
        email: "leanneburch@speedbolt.com",
        especialidad: "Neumonologia",
        cantidadConsultas: 1,
        puntaje: 5,
    },
    {
        id: 4,
        estaHabilitado: false,
        honorarioConsulta: 2674.09,
        edad: 31,
        nombre: "haynes Fuentes",
        email: "haynesfuentes@speedbolt.com",
        especialidad: "Cardiologia",
        cantidadConsultas: 0,
        puntaje: 4,
    },
    {
        id: 5,
        estaHabilitado: true,
        honorarioConsulta: 1851.37,
        edad: 27,
        nombre: "tamika Fuentes",
        email: "tamikanewman@speedbolt.com",
        especialidad: "Cardiologia",
        cantidadConsultas: 0,
        puntaje: 6,
    },
    {
        id: 6,
        estaHabilitado: true,
        honorarioConsulta: 2568.94,
        edad: 34,
        nombre: "russo Baldwin",
        email: "russobaldwin@speedbolt.com",
        especialidad: "Dermatologia",
        cantidadConsultas: 4,
        puntaje: 10,
    },
    {
        id: 7,
        estaHabilitado: true,
        honorarioConsulta: 2601.76,
        edad: 36,
        nombre: "dodson Shaffer",
        email: "dodsonshaffer@speedbolt.com",
        especialidad: "Cardiologia",
        cantidadConsultas: 0,
        puntaje: 0,
    },
    {
        id: 8,
        estaHabilitado: true,
        honorarioConsulta: 1949.92,
        edad: 40,
        nombre: "guerra Bright",
        email: "guerrabright@speedbolt.com",
        especialidad: "Neumonologia",
        cantidadConsultas: 8,
        puntaje: 0,
    },
    {
        id: 9,
        estaHabilitado: true,
        honorarioConsulta: 3898.11,
        edad: 20,
        nombre: "dina Navarro",
        email: "dinanavarro@speedbolt.com",
        especialidad: "Cardiologia",
        cantidadConsultas: 6,
        puntaje: 8,
    },
    {
        id: 10,
        estaHabilitado: false,
        honorarioConsulta: 2745.73,
        edad: 27,
        nombre: "stafford Watts",
        email: "staffordwatts@speedbolt.com",
        especialidad: "Cardiologia",
        cantidadConsultas: 0,
        puntaje: 6,
    },
    {
        id: 11,
        estaHabilitado: false,
        honorarioConsulta: 2808.98,
        edad: 39,
        nombre: "joni Avery",
        email: "joniavery@speedbolt.com",
        especialidad: "Neumonologia",
        cantidadConsultas: 3,
        puntaje: 9,
    },
    {
        id: 12,
        estaHabilitado: true,
        honorarioConsulta: 1941.13,
        edad: 21,
        nombre: "mayra Tran",
        email: "mayratran@speedbolt.com",
        especialidad: "Oftamologia",
        cantidadConsultas: 8,
        puntaje: 3,
    },
    {
        id: 13,
        estaHabilitado: false,
        honorarioConsulta: 3930.0344999999998,
        edad: 23,
        nombre: "ward Dale",
        email: "warddale@speedbolt.com",
        especialidad: "Cardiologia",
        cantidadConsultas: 1,
        puntaje: 3,
    },
];

/*******************************/
/* Desarrollo de las consignas */
/*******************************/

// A
const appProfesionales = {
    profesionales,
    // B
    listarProfesionales: function (arr) {
        for (const profecional of arr) {
            console.log(
                `id ${profecional.id} ${
                    profecional.estaHabilitado ? "ok" : "inactivo"
                }, ${profecional.especialidad}, ${
                    profecional.nombre
                }, valor consulta $${profecional.honorarioConsulta}, puntaje: ${
                    profecional.puntaje
                }`
            );
        }
    },
    // C
    filtrarMejoresPuntajes: function () {
        const mejoresProfecionales = [];
        for (const profecional of this.profesionales) {
            if (profecional.puntaje > 7) {
                mejoresProfecionales.push(profecional);
            }
        }
        return mejoresProfecionales.length
            ? mejoresProfecionales
            : "No hay profecionales que superen los 7 puntos";
    },
    // D
    buscarPorID: function (id) {
        for (const profecional of this.profesionales) {
            if (profecional.id === id) {
                return profecional;
            }
        }
        return `No se encontro un profecional con el id: ${id}`;
    },
    // E
    habilitarProfesional: function (id) {
        const profesionalCambiarEstado = this.buscarPorID(id);
        if (!profesionalCambiarEstado.estaHabilitado) {
            profesionalCambiarEstado.estaHabilitado = true;
            return profesionalCambiarEstado;
        } else {
            return `El profecional con id ${id} ya esta habilidado`;
        }
    },
    // F
    corregirNombres: function () {
        for (let i = 0; i < this.profesionales.length; i++) {
            const nombreProfecional = this.profesionales[i].nombre;
            this.profesionales[i].nombre =
                nombreProfecional.charAt(0).toUpperCase() +
                nombreProfecional.slice(1);
        }
        return this.profesionales;
    },
};

/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]);

console.log(v, "\n" + oo + "   B. listarProfesional");
appProfesionales.listarProfesionales(appProfesionales.profesionales);
console.log(o);

console.log(v, oo + "   C. filtrarMejoresPuntajes");
console.table(appProfesionales.filtrarMejoresPuntajes());
console.log(o);

console.log(v, oo + " D. buscarPorId(1)");
console.table(appProfesionales.buscarPorID(9));
console.log(o);

console.log(v, oo + "  E. habilitarProfesional");
console.log(appProfesionales.habilitarProfesional(1));
console.log(o);

console.log(v, oo + " F. corregirNombres");
console.table(appProfesionales.corregirNombres());
console.log(o);
