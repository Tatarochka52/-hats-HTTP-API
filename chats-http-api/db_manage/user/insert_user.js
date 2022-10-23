function InsertUser(dbCliend, user, resultHandler, errorHandler){
    dbCliend.query(`INSERT INTO Users(
                        UserName,
                        CreatedAt
                    )
                    VALUES (
                        '${user.userName}',
                        '${user.createdAt}'
                    )
                    RETURNING id`)
                    .then(result => {
                        resultHandler(result.rows[0].id);   
                    })
                    .catch(error => {
                        errorHandler(error.stack);
                    });
}

module.exports.InsertUser = InsertUser;