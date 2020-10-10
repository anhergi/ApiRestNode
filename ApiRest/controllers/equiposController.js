const getter = require("../queries/get");
const poster = require("../queries/post");
const remove = require("../queries/delete");

const log = require("../logs/logs");
const constantes = require("../constantes/constantes");

const getAllTeams = function (req, res) {
    getter.queryGet(constantes.$query_equipos, r => {
        log.escribirLog("Consulta Equipos..." + r.mensaje);
        if (r.error) {
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(r.datos);
    });
}

const getByIdTeam = function (req, res) {
    getter.queryGet(constantes.$query_equipo + req.params.id, r => {
        log.escribirLog("Consulta Equipo..." + r.mensaje);
        if (r.error) {
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(r.datos);
    });
}

const getTeamsByConference = function (req, res) {
    getter.queryGet(constantes.$query_equipos_conferencia + req.params.id, r => {
        log.escribirLog("Consulta Equipos por Conferencia..." + r.mensaje);
        if (r.error) {
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(r.datos);
    });
}

const getTeamsByDivision = function (req, res) {
    getter.queryGet(constantes.$query_equipos_division + req.params.id, r => {
        log.escribirLog("Consulta Equipos por Division..." + r.mensaje);
        if (r.error) {
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(r.datos);
    });
}

const addTeam = function (req, res) {
    poster.queryPost(req.body, "equipos", r => {
        log.escribirLog("Añadir/Modificar Equipo..." + r.mensaje);
        if (r.error) {
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(r.datos);
    });
}

const deleteTeam = function (req, res) {
    remove.queryDelete(req.params.id, "equipos", r => {
        log.escribirLog("Eliminar Equipo..." + req.params.id + " " + r.mensaje);
        if (r.error) {
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(r.datos);
    });
}

module.exports = { getAllTeams, getByIdTeam, getTeamsByConference, getTeamsByDivision, addTeam, deleteTeam };