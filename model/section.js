const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sectionSchema = new Schema({
  type: String,
  homeworks: [{
    homework: {
      type: Schema.ObjectId,
      ref: 'Homework'
    },
    count:Number
  }]
});

const section = mongoose.model('Section', sectionSchema);

module.exports = section;
