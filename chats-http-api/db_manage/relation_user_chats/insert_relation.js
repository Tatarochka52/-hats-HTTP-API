function InsertRealation(dbCliend, user_chat, errorHandler){
    dbCliend.query(`INSERT INTO UserChat(
                        UsersId,
                        ChatId
                    )
                    VALUES (
                        '${user_chat.UserId}',
                        '${user_chat.ChatId}'
                    )`)
                    .catch(error => errorHandler(error));
}

module.exports.InsertRealation = InsertRealation;