var { CreateUserTable } = require("../user/create_user_table");
var { CreateChatTable } = require("../chat/create_chat_table");
var { CreateMessageTable } = require("../message/create_message_table");
var { CreateRelationTable } = require("../relation_user_chats/create_relation_table");

function CreateTables(dbClient){
    CreateUserTable(dbClient);
    CreateChatTable(dbClient);
    CreateRelationTable(dbClient);
    CreateMessageTable(dbClient);
}

module.exports.CreateTables = CreateTables;