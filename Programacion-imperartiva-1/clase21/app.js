const archivo = require("./lecturaEscritura");
const departamentos = archivo.leerJson("departamentos");

console.log(departamentos);

const inmobiliaria = {
    // A
    departamentos,
    listarDepartamentos: (arr) => {
        arr.forEach(arr => {
            console.table(
                `id: ${arr.id}, precio $ ${arr.precioAlquiler}, ${
                    arr.disponible ? " está Disponible" : "Alquilado"
                }, ${arr.ambientes} ambientes`
            );
        });
    },
    buscarPorId: (id) => {
        const departamento = this.departamentos.find( () => id === this.departamentos.id);
        return departamento
    }

};

inmobiliaria.listarDepartamentos(inmobiliaria.departamentos);
console.table(inmobiliaria.buscarPorId(5));