const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paperSchema = new Schema({
  sections: [{
    section: {
      type: Schema.ObjectId,
      ref: 'Section'
    }
  }]
});

const paper = mongoose.model('Paper', paperSchema);

module.exports = paper;
