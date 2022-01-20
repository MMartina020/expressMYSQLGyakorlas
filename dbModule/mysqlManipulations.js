const config = require("../config/config.json");
const mysql = require ("mysql");

const connection = mysql.createConnection( {
    host: config.host,
    port: config.port,
    database: config.dbname,
    username: config.dbusername,
    password: config.dbpass
})

const sqldolgozok = "SELECT nev, fizetes, onev FROM dolgozo INNER JOIN osztaly ON osztaly=o_azon";
const sqlures="SELECT o_nev FROM osztaly WHERE o_azon NOT IN (SELECT osztaly FROM dolgozo)";

module.exports.dolgozo = function (callback){
    
}