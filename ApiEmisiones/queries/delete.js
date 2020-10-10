const { connectBBDD } = require("../constantes/constantes");
const connectionInit = require("./conectionInit");
const log = require("../logs/logs");

const queryDelete = function (id, table, callback) {
    connectionInit.conInit(connectBBDD, r => {
        if (r.error) {
            return callback({ error: r.error, datos: err, mensaje: r.mensaje });
        } else {
            console.log("Conexion OK", id);
            let mens = "";
            const con = r.con;
            const script = "DELETE FROM " + table + " WHERE id = " + id;
            con.query(script, function (err, rows, fields) {
                if (err) {
                    console.log("Error Eliminando Dato", err);
                    log.escribirLog("Error Eliminando Dato..." + id + " " + err);
                    con.end(function () {
                        console.log("Cerrada conexión");
                    });
                    return callback({ error: true, datos: err, mensaje: "Error Borrando Datos" });
                } else {
                    console.log("Método Delete OK");
                    if (rows.affectedRows === 0) {
                        mens = "No existe la fila";
                    } else {
                        mens = "Borrado OK";
                    }
                    con.end(function () {
                        console.log("Cerrada conexión");
                    });
                    return callback({ error: false, datos: rows, mensaje: mens });
                }
            });
        }
    });
}

module.exports = { queryDelete };
