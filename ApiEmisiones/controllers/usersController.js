const getter = require("../queries/get");
const log = require("../logs/logs");
const constantes = require("../constantes/constantes");
const connectOracle = require("../queries/connectionOracle");

const getAllUsers = function (req, res) {
    // getter.queryGetOracle(constantes.$query_usuarios_getAll, r => {
    //     log.escribirLog("Consulta Usuarios..." + r.mensaje);
    //     // console.log(r);
    //     if (r.error) {
    //     }
    //     res.setHeader('Access-Control-Allow-Origin', '*');
    //     res.send(r.datos);
    // });
    connectOracle.open(constantes.$query_usuarios_getAll, [], false, res)
}

module.exports = { getAllUsers };