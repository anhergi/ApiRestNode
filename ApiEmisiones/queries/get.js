const { connectBBDD, connectBBDDOracle } = require("../constantes/constantes");
const connectionInit = require("./conectionInit")
const connectionInitOracle = require("./connectionInitOracle")

const queryGet = function ($query, callback) {
    connectionInit.conInit(connectBBDD, r => {
        if (r.error) {
            return callback({ error: r.error, datos: err, mensaje: r.mensaje });
        } else {
            console.log("Conexion OK", r);
            const con = r.con;
            console.log("Lanzamos Query", connectBBDD, $query);
            con.query($query, function (err, rows, fields) {
                if (err) {
                    console.log("Error Extrayendo Datos", err);
                    return callback({ error: true, datos: err, mensaje: "Error Extrayendo Datos" });
                } else {
                    return callback({ error: false, datos: rows, mensaje: "Datos OK" });
                }
            });
            con.end(function () {
                console.log("Cerrada conexión");
            });
        }
    });
}

const queryGetOracle = function ($query, callback) {
    connectionInitOracle.conInitOracle(connectBBDDOracle, r => {
        if (r.error) {
            return callback({ error: r.error, datos: err, mensaje: r.mensaje });
        } else {
            const con = r.con;
            con.execute($query, [], false, function (err, result) {
                if (err) {
                    console.log("Error Extrayendo Datos", err);
                    return callback({ error: true, datos: err, mensaje: "Error Extrayendo Datos" });
                } else {
                    return callback({ error: false, datos: result, mensaje: "Datos OK" });
                }
            });
            con.release(function (err) {
                if (err) {
                    console.log(err.message);
                } else {
                    console.log("Conexión cerrada");
                }
            });
        }
    });
}

module.exports = { queryGet, queryGetOracle };
