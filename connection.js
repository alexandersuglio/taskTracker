var mySQL = require('mysql');
var connection;

if ('mysql://woop6poz6mshqfa3:ygmhrnz9vcutkenp@lg7j30weuqckmw07.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/n0w9uutyinke4xg9'

) {

    connection = mySQL.createConnection('mysql://woop6poz6mshqfa3:ygmhrnz9vcutkenp@lg7j30weuqckmw07.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/n0w9uutyinke4xg9'

    );


} else {

    connection = mySQL.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'taskDB'
    });


};


connection.connect();
module.exports = connection;
