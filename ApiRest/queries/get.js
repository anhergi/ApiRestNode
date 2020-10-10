const { connectBBDD } = require("../constantes/constantes");
const connectionInit = require("./conectionInit")

const queryGet = function ($query, callback) {
    connectionInit.conInit(connectBBDD, r => {
        if (r.error) {
            return callback({ error: r.error, datos: err, mensaje: r.mensaje });
        } else {
            console.log("Conexion OK");
            const con = r.con;
            con.query($query, function (err, rows, fields) {
                if (err) {
                    console.log("Error Extrayendo Datos");
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

module.exports = { queryGet };
