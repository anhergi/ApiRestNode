
const connectBBDDOracle = {
    // user: "FUGITIVAS_OWN",
    user: "FUGITIVAS_APP",
    // password: "Fug1t1v4s_0wn",
    password: "FUGITIVAS_APP",
    connectString: "OLM18D06.enades.des:1603/EMIFUGI.ENAGAS"
};
const connectBBDD = {
    host: "localhost",
    user: "root",
    password: "",
    database: "basket"
};

// Querys Sencillas GETs
const $query_usuarios_getAll = "select * from ef_tusuario";
// const $query_usuarios_getAll = "select * from equipos";

module.exports = {connectBBDD, connectBBDDOracle, $query_usuarios_getAll};