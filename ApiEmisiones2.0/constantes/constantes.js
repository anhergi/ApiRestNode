const connectBBDDEmisionesOracle = {
    // user: "FUGITIVAS_OWN",
    user: "FUGITIVAS_APP",
    // password: "Fug1t1v4s_0wn",
    password: "FUGITIVAS_APP",
    connectString: "OLM18D06.enades.des:1603/EMIFUGI.ENAGAS"
};

const $query_usuarios_getAll = "select * from ef_tusuario eu order by eu.idn_usuario";
const $query_usuarios_getById = "select * from ef_tusuario eu where eu.idn_usuario = ";

const $query_emisiones_getAll = "select * from ef_temision_fugitiva ef order by ef.idn_emision";
const $query_emisiones_getById = "select * from ef_temision_fugitiva ef where ef.idn_emision = ";

module.exports = {connectBBDDEmisionesOracle, $query_usuarios_getAll, $query_usuarios_getById, $query_emisiones_getAll, $query_emisiones_getById};