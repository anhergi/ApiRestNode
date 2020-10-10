/*
GET = Obtener
POST = Crear
PUT = Actualizar
DELETE = Eliminar*/

// LLamamos a express y la asignamos a variable
const express = require("express");
// Para manejo de datos
const bodyParser = require("body-parser");
// Reasignamos a app
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let usuario = {
    nombre = "",
    apellidos = ""
};

let respuesta = {
    error: false,
    codigo: 200,
    mensaje: "",
    datos: null
};

app.get('/', function (req, res) {
    respuesta = {
        error: false,
        codigo: 200,
        mensaje: "Punto de inicio",
        datos: null
    }
    //res.send("Saludos desde express");
    res.send(respuesta);
});

app.get("/usuario", function (req, res) {
    if (usuario.nombre === "" || usuario.apellidos === "") {
        respuesta = {
            error: true,
            codigo: 501,
            mensaje: "El usuario no ha sido creado",
            datos: null
        }
    } else {
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: "Respuesta de usuario",
            datos: usuario
        }
    }
    res.send(respuesta);
});

app.post("/usuario", function (req, res) {
    if (!req.body.nombre || !req.body.apellidos) {
        respuesta = {
            error: true,
            codigo: 502,
            mensaje: "El campo nombre y apellidos son requeridos",
            datos: null
        }
    } else {
        if (usuario.nombre !== "" || usuario.apellidos !== "") {
            respuesta = {
                error: true,
                codigo: 503,
                mensaje: "El usuario ya fue creado",
                datos: null
            }
        } else {
            usuario = {
                nombre = req.body.nombre,
                apellidos = req.body.apellidos
            };
            respuesta = {
                error: false,
                codigo: 200,
                mensaje: "Usuario creado",
                datos: usuario
            }
        }
    }
    res.send(respuesta);
});

app.put('/usuario', function (req, res) {
    if (!req.body.nombre || !req.body.apellido) {
        respuesta = {
            error: true,
            codigo: 502,
            mensaje: 'El campo nombre y apellido son requeridos',
            datos: null
        };
    } else {
        if (usuario.nombre === '' || usuario.apellido === '') {
            respuesta = {
                error: true,
                codigo: 501,
                mensaje: 'El usuario no ha sido creado',
                datos: null
            };
        } else {
            usuario = {
                nombre: req.body.nombre,
                apellido: req.body.apellido
            };
            respuesta = {
                error: false,
                codigo: 200,
                mensaje: 'Usuario actualizado',
                datos: usuario
            };
        }
    }

    res.send(respuesta);
});

app.delete('/usuario', function (req, res) {
    if (usuario.nombre === '' || usuario.apellido === '') {
        respuesta = {
            error: true,
            codigo: 501,
            mensaje: 'El usuario no ha sido creado',
            datos: null
        };
    } else {
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: 'Usuario eliminado',
            datos: null
        };
        usuario = {
            nombre: '',
            apellido: ''
        };
    }
    res.send(respuesta);
});

app.use(function (req, res, next) {
    respuesta = {
        error: true,
        codigo: 404,
        mensaje: 'URL no encontrada'
    };
    res.status(404).send(respuesta);
});

/*app.get('/hola', function(req, res) {
    res.send("[GET] Saludos desde express");
});

app.post('/hola', function(req, res) {
    res.send("[POST] Saludos desde express");
});*/

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});