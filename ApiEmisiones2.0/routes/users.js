const express = require("express");
const router = express.Router();

const oracledb = require("oracledb");
const constantes = require("../constantes/constantes");

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
// oracledb.outFormat = oracledb.OUT_FORMAT_ARRAY;

router.get("/", async(req, res) => {
    let connection;

    try {
        connection = await oracledb.getConnection(constantes.connectBBDDEmisionesOracle);
        const result = await connection.execute(constantes.$query_usuarios_getAll)
        res.json(result.rows);
    } catch(err) {
        console.error(err);
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch(err) {
                console.error(err);
            }
        }
     }
});

router.get("/:id", async(req, res) => {
    let connection;

    try {
        connection = await oracledb.getConnection(constantes.connectBBDDEmisionesOracle);
        const result = await connection.execute(constantes.$query_usuarios_getById + req.params.id)
        res.json(result.rows);
    } catch(err) {
        console.error(err);
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch(err) {
                console.error(err);
            }
        }
     }
});

module.exports = router;