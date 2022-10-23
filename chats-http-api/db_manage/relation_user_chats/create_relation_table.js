function CreateRelationTable(dbClient){
    dbClient.query(`CREATE TABLE IF NOT EXISTS UserChat (
                        Id SERIAL PRIMARY KEY,
                        UsersId INTEGER NOT NULL REFERENCES Users,
                        ChatId INTEGER NOT NULL REFERENCES Chat,
                        UNIQUE(UsersId, ChatId)
                    )`)
                    .catch(e => console.error(e.stack));
};

module.exports.CreateRelationTable = CreateRelationTable;