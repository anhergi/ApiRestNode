const getter = require("../queries/get");

const log = require("../logs/logs");
const constantes = require("../constantes/constantes");

const getAllConferencias = function (req, res) {
    getter.queryGet(constantes.$query_conferencias, r => {
        log.escribirLog("Consulta Conferencias..." + r.mensaje);
        console.log(r);
        if (r.error) {
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(r.datos);
    });
}

module.exports = { getAllConferencias };