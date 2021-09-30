const archivo = require("./lecturaEscritura");
const departamentos = archivo.leerJson("departamentos");

console.log(departamentos);

const inmobiliaria = {
    // A
    departamentos,
    listarDepartamentos: function () {
        this.departamentos.forEach(departamentos => {
            console.table(
                `id: ${departamentos.id}, precio $ ${departamentos.precioAlquiler}, ${
                    departamentos.disponible ? " está Disponible" : "Alquilado"
                }, ${departamentos.ambientes} ambientes`
            );
        });
    },
    buscarPorId: (id) => {
        return this.departamentos.find( departamentos => id === departamentos.id);
    }

};

inmobiliaria.listarDepartamentos(inmobiliaria.departamentos);
console.table(inmobiliaria.buscarPorId(5));