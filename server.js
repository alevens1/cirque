var mongoose = require("mongoose");
// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

mongoose.connect ("mongodb://heroku_tzzc3znp:srhvh3u0kfgmorf6pnqo43i2e2@ds113775.mlab.com:13775/heroku_tzzc3znp");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("app/public"));

// Routes
// =============================================================
// require("./routes/api/users.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
