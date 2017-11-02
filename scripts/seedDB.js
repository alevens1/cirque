const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://heroku_tzzc3znp:Rebelheart15@ds113775.mlab.com:13775/heroku_tzzc3znp",
  {
    useMongoClient: true
  }
);

const userSeed = [
  {
    firstName: "Kamala",
    lastName: "King",
    email: 'k.king@gmail.com',
    password: "******"
  },
 
];

const classSeed = [
  {
    date: "Wednesday November 1st, 2017",
    startTime: "10:30-11:30 am",
    class: "Aerial Silks",
    teacher: "Sabrina Madsen",
    room: "Aerial Silks Area"
  },
  {
    date: "Thursday November 2nd, 2017",
    startTime: "12:00-1:00 am",
    class: "Booty Blaster",
    teacher: "Sabrina Madsen",
    room: "Aerial Silks Area" 
  }
];



db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " new user created!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


  db.Class
  .remove({})
  .then(() => db.Class.collection.insertMany(classSeed))
  .then(data => {
    console.log(data.insertedIds.length + " new class added!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
