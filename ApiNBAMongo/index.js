const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// Utilizar archivo .env

const app = express();

mongoose.connect("mongodb://localhost/nba")
    .then(db => console.log("DB is connected"))
    .catch(err => console.error(err));

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/teams", require("./routes/teams"));
app.use("/players", require("./routes/players"));

// Server Listening
app.listen(app.get("port"), () => {
    console.log("Server on port ", app.get("port"));
});