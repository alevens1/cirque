const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const db = require('./config');
const passport = require('passport');
const PORT = process.env.PORT || 3001;
const session = require("express-session");


// ///require database and load models
// require('./models').connect(db.dbUri);


//bodyparser for AJAX
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(express.static("client/build"));



//Database configuration with mongoose
mongoose.connect('mongodb://alevens1:origami@ds113775.mlab.com:13775/heroku_tzzc3znp');
var db = mongoose.connection;

//show any mongoose erros
db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

//once logged in to the db through mongoose, log a response
db.once('open', function() {localStorage
  console.log('Mongoose connection successful.');
});

///authorization cheker middlware
const authCheckMiddleware = require('.middleware/auth-check');
app.use('.api', authCheckMiddleware);


//add routes
app.use(routes);
///sessions to log user's login status
app.use(session({ secret: "to ride a silver broomstick",
                  resave: true,
                  saveUninitialized: true,
                  cookie: {
                    secure: 'auto',
                    maxAge: 5*24*60*60*1000
                  }}));
(passport.initialize());
(passport.session());

///load passport strategies
const localSignupStrategy = require('.passport/local-signup');
const localLoginStrategy = require('.passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);


//start API server
app.listen(3000, function() {
  console.log("App running on port 3000!");
});




