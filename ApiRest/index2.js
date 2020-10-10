/*
GET = Obtener
POST = Crear
PUT = Actualizar
DELETE = Eliminar*/

const express = require("express");
const bodyParser = require("body-parser");

const equiposController = require("./controllers/equiposController");
const jugadoresController = require("./controllers/jugadoresController");
const conferenciasController = require("./controllers/conferenciasController");
const divisionesController = require("./controllers/divisionesController");
const productsController = require("./controllers/productsController");

const log = require("./logs/logs");

//const mongoose = require("mongoose");
//const methodOverride = require("method-override");

// Swagger
const swaggerUi = require("swagger-ui-express");
// const swaggerJSDoc = require("swagger-jsdoc");
const swaggerDocument = require("./swagger.json");


// const swaggerDefinitions = {
//     info: {
//         title: "MySql Registation Swagger API",
//         version: "1.0.0",
//         description: "EndPoints to test the apiBasket routes",
//     },
//     host: "localhost:3003",
//     basePath: "/",
//     securityDefinitios: {
//         bearerAuth: {
//             type: "apiKey",
//             name: "Authorization",
//             scheme: "bearer",
//             in: "header"
//         },
//     },
// };
// const options = {
//     swaggerDefinitions,
//     apis: ['../controllers/*.js']
// };
// const swaggerSpec = swaggerJSDoc(options);

// app.get('/swagger.json', function (req, res) {
//     res.setHeader('Content-Type', 'application/json');
//     res.send(swaggerSpec);
// })

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);


// Métodos GET

// Con la funcionalidad route
router.route('/')
    .get(function (req, res) {
        res.send("Iniciamos Servidor");
    });

router.route('/equipos/')
    .get(equiposController.getAllTeams)
    .post(equiposController.addTeam)

router.route('/equipos/:id')
    .get(equiposController.getByIdTeam)
    .delete(equiposController.deleteTeam);

router.route('/equiposByConferencia/:id')
    .get(equiposController.getTeamsByConference);
    
router.route('/equiposByDivision/:id')
    .get(equiposController.getTeamsByDivision);

router.route('/jugadores/')
    .get(jugadoresController.getAllPlayers)
    .post(jugadoresController.addPlayer)

router.route('/jugadores/:id')
    .get(jugadoresController.getByIdPlayer)
    .delete(jugadoresController.deletePlayer)

router.route('/jugadoresByEquipo/:id')
    .get(jugadoresController.getPlayersByTeam)

router.route('/conferencias/')
    .get(conferenciasController.getAllConferencias);

router.route('/divisiones/')
    .get(divisionesController.getAllDivisiones);

router.route('/api/v1/products')
    .get(productsController.getAllProducts)
    .post(productsController.addProduct)

router.route('/api/v1/products/:id')
    .get(productsController.getByIdProduct)
    .put(productsController.modifyProduct)
    .delete(productsController.deleteProduct)

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(3000, () => {
    console.log("Server On in port 3000");
    log.escribirLog("Iniciado Servidor...", true);
});
