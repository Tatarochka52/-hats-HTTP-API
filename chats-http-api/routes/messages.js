var express = require('express');
var router = express.Router();

var { InsertMassage } = require('../db_manage/message/insert_message');
var { SelectMessages } = require('../db_manage/message/select_message');
var { DateParseForPg } = require('../db_manage/helper/date_parse_pg');

router.post('/add', function(req, res, next) {
  let dbClient = global.dbClient;

  let chatId = req.body.chat;
  let author = req.body.author;
  let text = req.body.text;
  let createdAt = DateParseForPg(new Date());

  InsertMassage(dbClient, 
                { Chat : chatId,
                  Author : author,
                  Text : text,
                  CreatedAt : createdAt
                },
                (massageId) => {
                  res.send({massageid : massageId});
                },
                (error) => {
                  res.status(500)
                     .send({error : error});
                });
});

router.post('/get', function(req, res, next) {
    let dbClient = global.dbClient;

    let chatId = req.body.chat;

    SelectMessages(dbClient, 
                   chatId,
                   massages => {
                    res.send(massages);
                   },
                   error => {
                    res.status(500)
                       .send(error.stack);
                   });
});

module.exports = router;