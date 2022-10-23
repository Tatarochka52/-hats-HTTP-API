function CreateChatTable(dbClient){
    dbClient.query(`CREATE TABLE IF NOT EXISTS Chat (
                        Id SERIAL PRIMARY KEY,
                        Name VARCHAR(30) UNIQUE,
                        CreatedAt DATETIME
                    )`)
                    .catch(e => console.error(e.stack));
};

module.exports.CreateChatTable = CreateChatTable;