var mySQL = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {

    connection = mySQL.createConnection(process.env.JAWSDB_URL);

} else {

   connection = mySQL.createConnection({
        // port: 3306,
        host: 'localhost',
        user: 'root',
        password: 'hacktheplanet',
        database: 'todoagain_db'
    });


};


connection.connect();
module.exports = connection;
