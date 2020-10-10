const objOracle = require("oracledb")

const conInitOracle = function(config, callback) {

    objOracle.getConnection(config, function(err, con) {
        if (err) {
            return callback({error: true, con: con, mensaje: err.message})
        } else {
            console.log(err, con);
            return callback({error: false, con: con, mensaje: "Conexión Ok"})            
        }
    })
}

module.exports = { conInitOracle };