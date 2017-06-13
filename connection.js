var mySQL = require('mysql');

var connection = mySQL.createConnection({
port: 3306,
host: "localhost",
user: "root",
password: "root",
database: "tasklogger"

});

connection.connect();
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });
module.exports = connection;