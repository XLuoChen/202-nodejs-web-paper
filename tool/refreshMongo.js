const mogoose = require('mongoose');
const rawData = require('./fixture/raw-data');
const Homework = require('../model/homework');
const Section = require('../model/section');
const Paper = require('../model/paper');

const modelMap = {
  Homework,
  Section,
  Paper
};

let docs = Object.keys(rawData);

// mogoose.connect('mongodb://localhost/supermarket');
module.exports = function refresh() {

  Object.keys(rawData).forEach((v) => {
    modelMap[v].remove(() => {
      modelMap[v].create(rawData[v], () => {
        docs = docs.filter(doc => doc !== v);
        if (docs.length === 0) {
          // console.log('refreshMongo success')
          // process.exit(0);
        }
      })
    });
  });
};