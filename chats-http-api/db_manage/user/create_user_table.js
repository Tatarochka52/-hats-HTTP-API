function CreateUserTable(dbClient){
    dbClient.query(`CREATE TABLE IF NOT EXISTS Users (
                        Id SERIAL PRIMARY KEY,
                        UserName VARCHAR(30) UNIQUE,
                        CreatedAt TIMESTAMP
                    )`)
                    .catch(e => console.error(e.stack));
}

module.exports.CreateUserTable = CreateUserTable;