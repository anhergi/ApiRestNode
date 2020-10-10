const getter = require("../queries/get");
const poster = require("../queries/post");
const putter = require("../queries/put");
const remove = require("../queries/delete");

const log = require("../logs/logs");
const constantes = require("../constantes/constantes");

const getAllProducts = function (req, res) {
    getter.queryGet(constantes.$query_products, r => {
        log.escribirLog("Consulta Productos..." + r.mensaje);
        console.log(r);
        if (r.error) {
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(r.datos);
    });
}

const getByIdProduct = function (req, res) {
    getter.queryGet(constantes.$query_product + req.params.id, r => {
        log.escribirLog("Consulta Producto..." + r.mensaje);
        console.log(r);
        if (r.error) {
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(r.datos);
    });
}

const addProduct = function (req, res) {
    poster.queryPost(req.body, "producto", r => {
        log.escribirLog("Añadir/Modificar Producto..." + r.mensaje);
        if (r.error) {
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(r.datos);
    });
}

const modifyProduct = function (req, res) {
    putter.queryPut(req.body, "producto", r => {
        log.escribirLog("Añadir/Modificar Producto..." + r.mensaje);
        if (r.error) {
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(r.datos);
    });
}

const deleteProduct = function (req, res) {
    remove.queryDelete(req.params.id, "producto", r => {
        log.escribirLog("Eliminar Producto..." + req.params.id + " " + r.mensaje);
        if (r.error) {
        }
        console.log(r.mensaje);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(r.datos);
    });
}

module.exports = { getAllProducts, getByIdProduct, addProduct, modifyProduct, deleteProduct };
