const mascota = require("./controller");

const tiempo = (ms) => {
    const date = new Date();
    let date2 = null;
    do {
        date2 = new Date();
    } while (date2 - date < ms);
}

mascota.chequeo();
while (mascota.sigueConVida()) {
    console.table(mascota.status());
    mascota.vivir();
    mascota.comer();
    mascota.curar();
    mascota.chequeo();
    mascota.suciedad();
    mascota.limpiando();
    tiempo(600);
};

console.log("R.I.P Adiosss...")