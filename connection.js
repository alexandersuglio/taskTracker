var mySQL = require('mysql');
var connection;

if ('mysql://mqrs75wut4ubcx6o:vsj57p27dcl42e90@lg7j30weuqckmw07.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/dlgwn6j0uhg770o9'

) {

    connection = mySQL.createConnection('mysql://mqrs75wut4ubcx6o:vsj57p27dcl42e90@lg7j30weuqckmw07.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/dlgwn6j0uhg770o9'

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
