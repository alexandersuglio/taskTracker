var express = require('express');
var parse = require('body-parser');
var app = express();

var PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
console.log("App connected and listening");
});

app.use(parse.json());
app.use(parse.urlencoded({ extended: true }));
app.use(parse.text());
app.use(parse.json({ type: "application/vnd.api+json" }));

app.use(express.static("Public"));
app.use(express.static(__dirname));

var htmlRoutes = require("./htmlRoutes.js");
var apiRoutes = require("./apiRoutes.js");

// htmlRoutes(app);

htmlRoutes(app);
apiRoutes(app);