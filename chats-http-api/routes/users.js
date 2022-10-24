var express = require('express');
var router = express.Router();

var { InsertUser } = require('../db_manage/user/insert_user');
var { DateParseForPg } = require('../db_manage/helper/date_parse_pg');

/* GET users listing. */
router.post('/add', function(req, res, next) {
  let dbClient = global.dbClient;

  let userName = req.body.username;
  let createdAt = DateParseForPg(new Date());

  InsertUser(dbClient, 
            { userName, 
              createdAt
            },
            (userId) => {
                res.send({userid : userId});
            },
            (error) => {
              res.status(500)
                .send({error : error});
            });
});

module.exports = router;
