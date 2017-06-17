var mySQL = require('mysql');
var connection;

if ('mysql://pxonzzsbvbd7spvy:ec64nx7eu0n6n2q6@y0nkiij6humroewt.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/jmxb88i1v6vgoadd'

) {

    connection = mySQL.createConnection('mysql://pxonzzsbvbd7spvy:ec64nx7eu0n6n2q6@y0nkiij6humroewt.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/jmxb88i1v6vgoadd'

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
