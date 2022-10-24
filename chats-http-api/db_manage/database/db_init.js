var { dbConnection } = require("./db_connect");
var { CreateTables } = require("./create_tables");

function dbInitial(){
    let dbClient = dbConnection();
    CreateTables(dbClient);
    return dbClient;
}

module.exports.dbInitial = dbInitial;