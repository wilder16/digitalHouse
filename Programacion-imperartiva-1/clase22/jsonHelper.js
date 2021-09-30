const fs = require('fs');

const jsonHelper = {
    // Este método se encarga de leer el archivo y retornar un formato de JS
    // El método asume que el archivo a leer está en el mismo directorio que este módulo
    leer: function (archivo) {
        // Leemos el archivo con la ayuda del módulo fs
        let contenido = fs.readFileSync(__dirname + '/' + archivo, 'utf8');
        // Transformamos el contenido de string a formato de JS
        return JSON.parse(contenido);
    }
}

module.exports = jsonHelper;