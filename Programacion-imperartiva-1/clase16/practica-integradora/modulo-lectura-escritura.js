const leerJson = function (ruta) {
    const fs = require("fs");
    let sitcoms = fs.readFileSync(ruta, "utf-8");
    let auto = JSON.parse(sitcoms);
    return auto;
};

// console.log(leerJson('AUTOS.json'));

const escribirJson = function (nombreArchivo, datos) {

    const fs = require("fs");
    fs.writeFileSync(nombreArchivo, datos);
    return;
};
