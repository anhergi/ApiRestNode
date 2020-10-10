const { connectBBDD } = require("../constantes/constantes");
const connectionInit = require("./conectionInit")

// Se supone que todas las consultas post irán con 'id'
const queryPost = function (body, table, callback) {
    let n = false;
    connectionInit.conInit(connectBBDD, r => {
        if (r.error) {
            return callback({ error: r.error, datos: err, mensaje: r.mensaje });
        } else {
            console.log("Conexion OK");
            const con = r.con;
            if (body["id"] === null) {
                n = true;
            }
            console.log("Creamos script...");
            const script = consultaPostBBDD(body, table, n);
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

function consultaPostBBDD(body, table, nuevo) {
    let arrayFields = [];
    let arrayValues = [];
    let insert = "INSERT INTO " + table + " (";
    let update = "UPDATE " + table + " SET ";
    if (nuevo) {
        console.log("Insert en tabla", table);
        for (const field in body) {
            if (field !== "id") {
                arrayFields.push(field);
                arrayValues.push(body[field]);
            }
        }
        arrayFields.forEach((res, index) => {
            insert += "" + res + "";
            if (index === arrayFields.length - 1) {
                insert += ") ";
            } else {
                insert += ", ";
            }
        });
        insert += "VALUES (";
        arrayValues.forEach((res, index) => {
            insert += "'" + res + "'";
            if (index === arrayValues.length - 1) {
                insert += ") ";
            } else {
                insert += ", ";
            }
        });
        console.log(insert);
        return insert;
        //INSERT INTO `equipos`(`nombre`, `ciudad`, `conferencia`, `division`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5])
    } else {
        console.log("Update en tabla", table);
        for (const field in body) {
                update += "" + field + "=" + body[field] + ", ";

        }
        console.log(update.slice(0, update.length - 2))
        return update.slice(0, update.length - 2);
        //UPDATE equipos SET nombre=prueba, ciudad=prueba, conferencia=1, division=1,  UPDATE equipos SET nombre=prueba, ciudad=prueba, conferencia=1, division=1
    }
}

module.exports = { queryPost }