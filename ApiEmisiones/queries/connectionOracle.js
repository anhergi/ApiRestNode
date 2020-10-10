const objOracle = require("oracledb")
const {connectBBDDOracle} = require("../constantes/constantes")

function error(err, rs, con) {
    if (err) {
        console.log(err.message);
        rs.contentType("application/json").status(500);
        rs.send(err.message);

        if (con != null) {
            close(con);
        }
        return -1;
    } else
        return 0;
}

function open(sql, binds, dml, rs) {
    objOracle.getConnection(connectBBDDOracle, function (err, con) {
        if (error(err, rs, null) == -1) {
            return;
        }
        console.log(err, con)
        con.execute(sql, binds, { autoCommit: dml }, function (err, result) {
            if (error(err, rs, null) == -1) {
                return;
            }
            if (dml) {
                rs.send(JSON.stringify(result.rowsAffected));
            } else {
                console.log(result.metaData, result.rows);
                rs.send(JSON.stringify(result.rows))
            }
            close(con);
        });
    });
}

function close(con) {
    con.release(function(err) {
        if (err) {
            console.log(err.message);
        }
    });
}

module.exports = { open, close };
