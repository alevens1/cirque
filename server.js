
// // Dependencies
// // =============================================================
// var express = require("express");
// var bodyParser = require("body-parser");
// var logger = require("morgan");
// var mongoose = require("mongoose");

// mongoose.Promise = Promise;

// // var User = require("./models/user.js");
// var Class = require("./models/class.js");


// // Initialize Express
// var app = express();

// // Use morgan and body parser with our app
// app.use(logger("dev"));
// app.use(bodyParser.urlencoded({
//   extended: false
// }));

// // Make public a static dir
// app.use(express.static("public"));
// // var PORT = process.env.PORT || 8080;


// mongoose.connect ("mongodb://heroku_tzzc3znp:srhvh3u0kfgmorf6pnqo43i2e2@ds113775.mlab.com:13775/heroku_tzzc3znp");
// var db = mongoose.connection;



// // Show any mongoose errors
// db.on("error", function(error) {
//   console.log("Mongoose Error: ", error);
// });

// // Once logged in to the db through mongoose, log a success message
// db.once("open", function() {
//   console.log("Mongoose connection successful.");
// });

// // Sets up the Express app to handle data parsing
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// // We'll create a new Library by using the Library model as a class
// // The "unique" rule in the User model's schema will prevent duplicate libraries from being added to the server
// var exampleClass = new Class({
//   date: "Wednesday November 1st, 2017",
//   startTime: "11:30-12:30 pm",
//   class: "Aerial Silks",
//   teacher: "Sabrina Madsen",
//   room: "Aerial Silks Area",
//   type: Schema.Types.ObjectId, ref: 'Class',
//   unique: true
// });
// // Using the save method in mongoose, we create our example library in the db
// exampleClass.save(function(error, doc) {
//   // Log any errors
//   if (error) {
//     console.log(error);
//   }
//   // Or log the doc
//   else {
//     console.log(doc);
//   }
// });


// // Routes
// // ======

// // This POST route handles the creation of a new book in our mongodb books collection
// app.post("/save", function(req, res) {

//   var newClass = new Class(req.body);

// // Save the new book in the books collection
//   newClass.save(function(err, doc) {
//     // Send an error to the browser if there's something wrong
//     if (err) {
//       res.send(err);
//     }
//     // Otherwise...
//     else {
//     // Find one library in our Library collection (there's only one, so that's fine),
//     // then update it by pushing the object id of the book we just saved
//     //
//     // REMEMBER: doc is a variable containing the document of the book we just saved,
//     // so calling doc._id will grab the id of the doc, in this case, our new book

//     // ALSO: We need "{new: true}" in our call,
//     // or else our query will return the object as it was before it was updated
//       Class.findOneAndUpdate({}, { $push: { "class": doc._id } }, { new: true }, function(error, doc) {
//         // Send any errors to the browser
//         if (error) {
//           res.send(error);
//         }
//         // Or send the doc to the browser
//         else {
//           res.send(doc);
//         }
//       });
//     }
//   });
// });


// // This GET route let's us see the books we have added
// app.get("/savedclasses", function(req, res) {
//   // Using our Book model, "find" every book in our book db
//   Class.find({}, function(error, doc) {
//     // Send any errors to the browser
//     if (error) {
//       res.send(error);
//     }
//     // Or send the doc to the browser
//     else {
//       res.send(doc);
//     }
//   });
// });


// // Route to see what our library data looks in the browser
// app.get("/library", function(req, res) {
//   // Find all of the entries of Library (there's only one, remember)
//   Library.find({}, function(error, doc) {
//     // Send an error message to the browser
//     if (error) {
//       res.send(error);
//     }
//     // Or send the doc to the browser
//     else {
//       res.send(doc);
//     }
//   });
// });

// // Route to see what library looks like WITH populating
// app.get("/populated", function(req, res) {
//   // Set up a query to find all of the entries in our Library..
//   Library.find({})
//     // ..and string a call to populate the entry with the books stored in the library's books array
//     // This simple query is incredibly powerful. Remember this one!
//     .populate("books")
//     // Now, execute that query
//     .exec(function(error, doc) {
//       // Send any errors to the browser
//       if (error) {
//         res.send(error);
//       }
//       // Or, send our results to the browser, which will now include the books stored in the library
//       else {
//         res.send(doc);
//       }
//     });
// });
// // Routes
// // =============================================================
// // require("./routes/api/users.js")(app);

// // Starts the server to begin listening
// // =============================================================
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });
