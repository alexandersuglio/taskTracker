var mySQL = require('mysql');
var connection = mySQL.createConnection(process.env.JAWSDB_URL || {
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'taskDB'
});


};


connection.connect();
module.exports = connection;
