var mySQL = require('mysql');
// var connection;

// if (process.env.JAWSDB_URL) {

//     connection = mySQL.createConnection(process.env.'mysql://g7545q5v6u1yowlf:pgjcvkxrl7prurch@r4919aobtbi97j46.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/dr6l97f3ntw6lp4t'

//     );


// } else {

  var connection = mySQL.createConnection({
        port: 3306,
        host: 'r4919aobtbi97j46.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'g7545q5v6u1yowlf',
        password: 'pgjcvkxrl7prurch',
        database: 'dr6l97f3ntw6lp4t'
    });


// };


connection.connect();
module.exports = connection;
