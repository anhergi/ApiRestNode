const express = require("express");
const morgan = require("morgan");
// const swaggerUi = require("swagger-ui-express");
// const swaggerJSDoc = require("swagger-jsdoc");
// const swaggerDocument = require("./swagger.json");
// const swaggerDefinition = require("./swaggerDefinition.json")

const app = express();

// const options = {
//     swaggerDefinition,
//     apis: ["./routes/*.js"]
// };
// const swaggerSpec = swaggerJSDoc(options);
// console.log(swaggerSpec);

// Settings
app.set("port", process.env.PORT || 3000);


// Middlewares -- Funciones que se ejecutan antes de entrar en las rutas
app.use(morgan("dev")); 
app.use(express.json());

// Routes
// app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/users", require("./routes/users"));
app.use("/emisiones", require("./routes/emisiones"));

// Static Files

// Server Listening
app.listen(app.get("port"), () => {
    console.log("Server on port ", app.get("port"));
});