const { connectBBDD } = require("../constantes/constantes");
const connectionInit = require("./conectionInit")

// Se supone que todas las consultas post irán con 'id'
const queryPut = function (body, table, callback) {
    connectionInit.conInit(connectBBDD, r => {
        if (r.error) {
            return callback({ error: r.error, datos: err, mensaje: r.mensaje });
        } else {
            console.log("Conexion OK");
            const con = r.con;
            console.log("Creamos script...");
            const script = consultaPutBBDD(body, table);
            console.log("Lanzamos script...");
            con.query(script, function (err, rows, fields) {
                if (err) {
                    console.log("Error Cambiando Datos");
                    console.log("Llamamos cierre");
                    con.end(function () {
                        console.log("Cerrada conexión");
                        //return callback({ error: false, datos: body, mensaje: "POST" });
                    });
                    return callback({ error: true, datos: err, mensaje: "Error Cambiando Datos" });
                } else {
                    console.log("Insertamos Datos Correctamente");
                    console.log("Llamamos cierre");
                    con.end(function () {
                        console.log("Cerrada conexión");
                        //return callback({ error: false, datos: body, mensaje: "POST" });
                    });
                    return callback({ error: false, datos: rows, mensaje: "Cambios OK" });
                }
            });
        }
    });
}

function consultaPutBBDD(body, table) {
    let update = "UPDATE " + table + " SET ";

    console.log("Update en tabla", table);
    for (const field in body) {
        update += "" + field + "=" + body[field] + ", ";

    }
    console.log(update.slice(0, update.length - 2))
    return update.slice(0, update.length - 2);
    //UPDATE equipos SET nombre=prueba, ciudad=prueba, conferencia=1, division=1,  UPDATE equipos SET nombre=prueba, ciudad=prueba, conferencia=1, division=1
}

module.exports = { queryPut }