var connection = require('./connection.js');

module.exports = function(app) {


    app.post("/task", function(req, res) {

        var dbQuery = "INSERT INTO alextasks (task_description) VALUES (?)";

        connection.query(dbQuery, [req.body.task_description], function(err, result) {
            res.end();
        });
    });
    app.get('/task/', function(req, res) {

        var dbQuery = "SELECT * FROM alextasks";
        connection.query(dbQuery, function(err, result) {
            if (err) throw err;
            res.json(result);
        });

    });

    app.delete('task.delete.:id', function(req, res) {







    });

    // app.get('/task/delete/:id', function(req, res) {
    //         var id = req.body.id;

    //         var dbQuery = "DELETE from alextasks where id = id";
    //         connection.query(dbQuery, id
    //             function(err, result) {

    //             }



    //         });

};
