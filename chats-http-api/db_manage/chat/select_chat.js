function SelectUserChats(dbClient, userId, resultHandler, errorHandler){
    dbClient.query(`SELECT Chat.Id, Chat.Name, Chat.CreatedAt
                    FROM Userchat
                    LEFT JOIN Chat 
                        ON Chat.Id = Userchat.ChatId
                    WHERE Userchat.UsersId = ${userId}
                    ORDER BY Chat.CreatedAt`)
                    .then(result => {
                        let chats = result.rows.map(row => {
                            return { Id : row.id, 
                                     Name : row.name,
                                     CreatedAt : row.createdat
                                    };
                        });
                        resultHandler(chats);
                    })
                    .catch(error => errorHandler(error));
}

module.exports.SelectUserChats = SelectUserChats;