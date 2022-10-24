var express = require('express');
var router = express.Router();

var { InsertChat } = require('../db_manage/chat/insert_chat');
var { InsertRealation } = require('../db_manage/relation_user_chats/insert_relation');
var { SelectUserChats } = require('../db_manage/chat/select_chat');
var { DateParseForPg } = require('../db_manage/helper/date_parse_pg');

router.post('/add', function(req, res, next) {
  let dbClient = global.dbClient;

  let chatName = req.body.name;
  let usersId = req.body.users;
  let createdAt = DateParseForPg(new Date());

  InsertChat(dbClient, 
            { Name : chatName, 
              CreatedAt : createdAt
            },
            (chatId) => {
              InsertUsersToChat(dbClient, chatId, usersId);
              res.send({id : chatId});
            },
            (error) => {
              res.status(500)
                 .send({error : error});
            });
});

router.post('/get', function(req, res, next){
    let dbClient = global.dbClient;

    let userId = req.body.user;

    SelectUserChats(dbClient, 
                    userId, 
                    chats => {
                        res.send(chats);
                    },
                    error => {
                        res.status(500)
                           .send(error.stack);
                    });
      
});

function InsertUsersToChat(dbCliend, chatid, usersId){
    usersId.forEach(userId => {
        InsertRealation(dbCliend,
                      { UserId : userId,
                        ChatId : chatid
                      },
                      (error) => {
                        console.error(error.stack);
                      });
    });
}

module.exports = router;