function InsertMassage(dbCliend, message, resultHandler, errorHandler){
    dbCliend.query(`INSERT INTO Message(
                        Chat,
                        Author,
                        Text,
                        CreatedAt
                    )
                    VALUES (
                        '${message.Chat}',
                        '${message.Author}',
                        '${message.Text}',
                        '${message.CreatedAt}'
                    )
                    RETURNING id`)
                    .then(result => resultHandler(result.rows[0].id))
                    .catch(error => errorHandler(error.stack));
}

module.exports.InsertMassage = InsertMassage;