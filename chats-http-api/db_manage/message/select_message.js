function SelectMessages(dbCliend, chatId, resultHandler, errorHandler){
    dbCliend.query(`SELECT Message.id, 
                        Message.Chat,
                        Message.Author, 
                        Message."text",
	                    Message.CreatedAt
                    FROM Message
                    WHERE Message.Chat = ${chatId}
                    ORDER BY Message.CreatedAt`)
                    .then(result => {
                        let messages = result.rows.map(row => {
                            return { Id: row.id, 
                                     Chat: row.chat, 
                                     Author: row.author, 
                                     Text: row.text,
                                     CreatedAt: row.createdat};
                        });
                        resultHandler(messages);
                    })
                    .catch(error => errorHandler(error));
}

module.exports.SelectMessages = SelectMessages;