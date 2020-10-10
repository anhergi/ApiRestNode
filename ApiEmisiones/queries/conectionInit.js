const mysql = require("mysql");

const conInit = function initializeConnection(config, callback) {
    function addDisconnectHandler(connection) {
        connection.on("error", function (error) {
            if (error instanceof Error) {
                if (error.code === "PROTOCOL_CONNECTION_LOST") {
                    console.error(error.stack);
                    console.log("Lost connection. Reconnecting...");

                    initializeConnection(connection.config);
                } else if (error.fatal) {
                    //throw error;
                    return callback({error: true, con: connection, mensaje: error});
                }
            }
        });
    }

    var connection = mysql.createConnection(config);
    
    // Add handlers.
    addDisconnectHandler(connection);

    connection.connect(datos => {
        console.log("Fallo de conexión a la base de datos", datos)
    });
    return callback({error: false, con: connection, mensaje: "Conexión OK"});
}

module.exports = { conInit };
