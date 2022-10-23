function InsertChat(dbCliend, chat, resultHandler, errorHandler){
    dbCliend.query(`INSERT INTO Chat(
                        Name,
                        CreatedAt
                    )
                    VALUES (
                        '${chat.Name}',
                        '${chat.CreatedAt}'
                    )
                    RETURNING id`)
                    .then(result => resultHandler(result.rows[0].id))
                    .catch(error => errorHandler(error.stack));
}

module.exports.InsertChat = InsertChat;