const getter = require("../queries/get");

const log = require("../logs/logs");
const constantes = require("../constantes/constantes");

const getAllDivisiones = function (req, res) {
    getter.queryGet(constantes.$query_divisiones, r => {
        log.escribirLog("Consulta Divisones..." + r.mensaje);
        console.log(r);
        if (r.error) {
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(r.datos);
    });
}

module.exports = { getAllDivisiones };