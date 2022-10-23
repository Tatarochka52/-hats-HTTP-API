function CreateMessageTable(dbClient){
    dbClient.query(`CREATE TABLE IF NOT EXISTS Message (
                        Id SERIAL PRIMARY KEY,
                        Chat INTEGER NOT NULL REFERENCES Chat (Id),
                        Author INTEGER NOT NULL REFERENCES Users (Id),
                        Text VARCHAR(4096),
                        CreatedAt DATETIME
                    )`)
                    .catch(e => console.error(e.stack));
};

module.exports.CreateMessageTable = CreateMessageTable;