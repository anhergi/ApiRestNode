
const filelog = "logs.txt";
const connectBBDD = {
    host: "localhost",
    user: "root",
    password: "",
    database: "basket"
};

// Querys Sencillas GETs
const $query_equipos = "select * from equipos";
const $query_equipos_conferencia = "select * from equipos where conferencia = ";
const $query_equipos_division = "select * from equipos where division = ";
const $query_equipo = "select * from equipos where id = ";

const $query_jugadores = "select * from jugador";
const $query_jugadores_team = "select * from jugador where equipo = ";
const $query_jugador = "select * from jugador where id = ";

const $query_conferencias = "select * from conferencias";
const $query_divisiones = "select * from divisiones";

const $query_products = "select * from producto";
const $query_product = "select * from producto where id = ";

module.exports = {connectBBDD, $query_equipos, $query_equipos_conferencia, $query_equipos_division, $query_equipo,
    $query_jugadores, $query_jugadores_team, $query_jugador, $query_conferencias, $query_divisiones,
    $query_products, $query_product};