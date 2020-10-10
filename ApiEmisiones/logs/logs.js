const { resolve, relative } = require('path');
const { writeFileSync, createFileSync, appendFile} = require('fs-extra');

var filenameDir = "";
// var dirLogs = "C:/emifugi/logs";

const crearFichero = function() {
    var fecha = new Date().getTime();
    var filename = "logs-api-" + fecha + ".txt";
    filenameDir = resolve(__dirname, filename);
    // filenameDir = resolve(dirLogs, filename);
    // console.log(__dirname, dirLogs);
    // createFileSync(file);
}

const escribirLog = function(texto, init) {
    // const file = resolve(__dirname, 'logs.txt');
    if (init) {
        writeFileSync(filenameDir, texto + "\r\n");
    } else {
        appendFile(filenameDir, texto + "\r\n")
    }
}

module.exports = { crearFichero, escribirLog };