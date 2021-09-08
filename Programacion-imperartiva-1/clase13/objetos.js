//la lista de clientes.
let arrayCuentas = [
    {
        nroCuenta: 5486273622,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 27771,
        titularCuenta: "Abigael Natte",
    },
    {
        nroCuenta: 1183971869,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 8675,
        titularCuenta: "Ramon Connell",
    },
    {
        nroCuenta: 9582019689,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 27363,
        titularCuenta: "Jarret Lafuente",
    },
    {
        nroCuenta: 1761924656,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 32415,
        titularCuenta: "Ansel Ardley",
    },
    {
        nroCuenta: 7401971607,
        tipoDeCuenta: "Cuenta Unica",
        saldoEnPesos: 18789,
        titularCuenta: "Jacki Shurmer",
    },
];
  // podes continuar tu codigo a partir de aca!

let banco = {
    clientes: [arrayCuentas],
    consultarCliente: function ( nombre ) {
        for (let i = 0; i < this.clientes.length; i++) {
            for(let j = 0; j <this.clientes[i].length; j++){
                if(this.clientes[i][j].titularCuenta === nombre){
                    return this.clientes[i][j];
                }
            }
        }
        return `No se encontro el cliente ${nombre}`;
    },
    deposito: function (nombreTitular, cantidadDinero){
        let cliente = this.consultarCliente(nombreTitular);
        cliente.saldoEnPesos += cantidadDinero;
        return `Depósito realizado, su nuevo saldo es: ${cliente.saldoEnPesos}`
    }, 
    extraccion: function (nombreTitular, dieroExtraer){
        let cliente = this.consultarCliente(nombreTitular);
        if ( cliente.saldoEnPesos < dieroExtraer){
            return "Fondos insuficientes";
        }else {
            cliente.saldoEnPesos -= dieroExtraer;
            return `Extracción realizada correctamente, su nuevo saldo es: ${cliente.saldoEnPesos}.`
        }
    }
}

console.log(banco.consultarCliente("Abigael Natte"));

console.log(banco.deposito("Jacki Shurmer", 300));

console.log(banco.extraccion("Ramon Connell", 8000));

