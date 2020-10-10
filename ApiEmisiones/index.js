const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const log = require("./logs/logs");

const app = express();
const router = express.Router();

// Controllers
const usersController = require("./controllers/usersController");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

router.route('/')
    .get(function (req, res) {
        res.send("Iniciamos Servidor");
    });

router.route('/usuarios/')
    .get(usersController.getAllUsers)

app.listen(3000, () => {
    console.log("Server On in port 3000");
    log.crearFichero();
    log.escribirLog("Iniciado Servidor...", true);
});