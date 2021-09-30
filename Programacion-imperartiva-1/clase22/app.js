const archivo = require("./jsonHelper");

const autos = archivo.leer("autos.json");

const carrera = {
    //A
    autos,
    //B
    autosPorTanda:6,
    //C
    autosHabilitados: function() {
        return this.autos.filter(autos => !autos.sancionado)
    }, 
}

console.table(carrera.autosHabilitados());
