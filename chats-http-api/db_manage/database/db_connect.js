const { Client } = require('pg');

function dbConnection(){
    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'chats_api',
        password: 'Plastelin777',
        port: 5432,
      });
      client.connect();
      return client;
}

module.exports.dbConnection = dbConnection;