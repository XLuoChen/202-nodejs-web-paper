const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const homeworkSchema = new Schema({
  title: String,
  stack: String
});

const homework = mongoose.model('Homework', homeworkSchema);

module.exports = homework;
