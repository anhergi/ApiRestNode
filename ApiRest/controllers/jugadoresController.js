const getter = require("../queries/get");
const poster = require("../queries/post");
const remove = require("../queries/delete");

const log = require("../logs/logs");
const constantes = require("../constantes/constantes");

const getAllPlayers = function (req, res) {
    getter.queryGet(constantes.$query_jugadores, r => {
        log.escribirLog("Consulta Jugadores..." + r.mensaje);
        console.log(r);
        if (r.error) {
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(r.datos);
    });
}

const getByIdPlayer = function (req, res) {
    getter.queryGet(constantes.$query_jugador + req.params.id, r => {
        log.escribirLog("Consulta Jugador..." + r.mensaje);
        console.log(r);
        if (r.error) {
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(r.datos);
    });
}

const getPlayersByTeam = function (req, res) {
    getter.queryGet(constantes.$query_jugadores_team + req.params.id, r => {
        log.escribirLog("Consulta Jugadores por Equipo..." + r.mensaje);
        console.log(r);
        if (r.error) {
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(r.datos);
    });
}

const addPlayer = function (req, res) {
    poster.queryPost(req.body, "jugador", r => {
        log.escribirLog("Añadir/Modificar Jugador..." + r.mensaje);
        if (r.error) {
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(r.datos);
    });
}

const deletePlayer = function (req, res) {
    remove.queryDelete(req.params.id, "jugador", r => {
        log.escribirLog("Eliminar Jugador..." + req.params.id + " " + r.mensaje);
        if (r.error) {
        }
        console.log(r.mensaje);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(r.datos);
    });
}

module.exports = { getAllPlayers, getByIdPlayer, getPlayersByTeam, addPlayer, deletePlayer };
