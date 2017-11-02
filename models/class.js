const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classSchema = new Schema({
  date: { type: String, required: true},
  startTime: { type: String, required: true },
  class: { type: String, required: true },
  teacher: { type: String, required: true},
  room: { type: String, required: true }
});

const Class = mongoose.model("Class", classSchema);

module.exports = Class;
