const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR
// Te proveemos la siguiente plantilla que tiene dos partes:
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Wilder de Jesús Bernal López";
const tema = "TEMA 2";

/*******************************/
/* Desarrollo de las consignas */
/*******************************/

const jsonHelper = require("./jsonHelper");
const peliculas = jsonHelper.leerJson("peliculas");

// A
const gestionDePeliculas = {
    // B
    peliculas,
    // C
    listarPeliculas: function (array) {
        return array.forEach((array) => {
            console.log(
                `${array.titulo}, de ${array.director}. Duración: ${array.duracion} minutos, ${array.genero}, (${array.calificacionIMDB} / 10 en IMDB)`
            );
        });
    },
    // D
    buscarPorId: function (id) {
        return this.peliculas.find((pelicula) => id === pelicula.id);
    },
    // E
    peliculasPorGenero: function (genero) {
        return this.peliculas.filter(
            (pelicula) => genero.toLowerCase() === pelicula.genero.toLowerCase()
        );
    },
    // F
    filtrarPorCalificacion: function (minimo, maximo) {
        return this.peliculas.filter(
            (pelicula) =>
                pelicula.calificacionIMDB >= minimo &&
                pelicula.calificacionIMDB <= maximo
        );
    },
    // G
    ordenarPorDuracion: function () {
        return this.peliculas.sort((a, b) => b.duracion - a.duracion, 0);
    },
    // H
    duracionPromedio: function () {
        return `El promedio de duración de las películas es de: ${
            this.peliculas.reduce(
                (acumulador, pelicula) => acumulador + pelicula.duracion,
                0
            ) / this.peliculas.length
        } minutos`;
    },
    // I
    modificarGeneroPorId: function (id, nuevoGenero) {
        let pelicula = this.buscarPorId(id);
        if (
            pelicula &&
            pelicula.genero.toLowerCase() !== nuevoGenero.toLowerCase()
        ) {
            pelicula.genero = nuevoGenero;
            this.peliculas.splice(id - 1, 1, pelicula);
            jsonHelper.escribirJson("peliculas", this.peliculas);
            return "La propiedad genero fue modificada con exito";
        } else if (
            pelicula &&
            pelicula.genero.toLowerCase() === nuevoGenero.toLowerCase()
        ) {
            return "La pelicula ya pertenece al generao al cual la quieres cambiar";
        } else {
            return pelicula;
        }
    },
};

/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]); // NO MODIFICAR NADA DE ESTA LINEA

console.log(v, "\n" + oo + " .C. Listar");
gestionDePeliculas.listarPeliculas(peliculas);
console.log(o);

console.log(v, oo + " .D. Buscar");
console.table(gestionDePeliculas.buscarPorId(15));
console.log(o);

console.log(v, oo + " .E. Filtrar 1");
gestionDePeliculas.listarPeliculas(
    gestionDePeliculas.peliculasPorGenero("horror")
);
console.log(o);

console.log(v, oo + " .F. Filtrar 2");
gestionDePeliculas.listarPeliculas(
    gestionDePeliculas.filtrarPorCalificacion(3, 7)
);
console.log(o);

console.log(v, oo + " .G. Ordenar");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.ordenarPorDuracion());
console.log(o);

console.log(v, oo + " .H. Duracion");
console.log(gestionDePeliculas.duracionPromedio());
console.log(o);

console.log(v, oo + " .I. Modificar Propiedad");
console.log(gestionDePeliculas.modificarGeneroPorId(16, "Terror"));
console.log(o);
