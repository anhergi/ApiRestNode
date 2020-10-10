const { resolve, relative } = require('path');
const { writeFileSync, createFileSync, appendFile} = require('fs-extra');


const crearFichero = function() {
    var fecha = new Date().getDate();
    var filename = "logs-api-" + fecha + ".txt";
    var file = resolve(__dirname, filename);
    createFileSync(file);
}

const escribirLog = function(texto, init) {
    const file = resolve(__dirname, 'logs.txt');
    if (init) {
        writeFileSync(file, texto + "\r\n");
    } else {
        appendFile(file, texto + "\r\n")
    }
}

module.exports = { crearFichero, escribirLog };