const { Client } = require('pg');

function db_connection(){
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

module.exports.db_connection = db_connection;