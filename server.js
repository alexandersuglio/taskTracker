var express = require('express');
var mySQL = require('mysql');
var bodyParser = require("body-parser");
var methodOverride = require('method-override')
var exphbs = require("express-handlebars");

var app = express();

var connection = require('./connection.js');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var PORT = 3000 || process.env.PORT;



app.get("/", function(req, res) {
    console.log("server firing");
    connection.query("SELECT * FROM taskTrackerALEX", function(err, data) {
        if (err) throw err;
        res.render("index", { task: data });
    });
});

app.post("/create", function(req, res) {

    connection.query("insert into taskTrackerALEX (task_description) values (?)", [req.body.task], function(err, data) {
res.redirect("/");
    });

});

app.delete('/delete', function(req,res){
	connection.query('delete from taskTrackerALEX where id =?', [req.body.id], function(err,data){
	
res.redirect("/");
			
	
	});
});

app.put('/update', function(req, res){
	connection.query('update taskTrackerALEX set task_description = ? where id = ? ', [req.body.task, req.body.id], function(err, data){
		res.redirect('/');
	});
});
app.listen(PORT, function() {
    console.log('app connected and listening');
});