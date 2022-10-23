var { db_connection } = require("./db_connect");

function db_initial(){
    let dbClient = db_connection();
    return dbClient;
}

module.exports.db_initial = db_initial;