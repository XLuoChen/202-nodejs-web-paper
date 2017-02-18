const async = require('async');
const Homework = require('../model/homework');

class HomeContorller {
  getAll(req, res, next) {
    async.series({
      items: (cb) => {
        Homework.find({}, cb);
      },
      totalCount: (cb) => {
        Homework.count(cb);
      }
    },(err,result)=>{
      if (err) {
        return next(err);
      }
      return res.status(200).send(result);
    });
  }
}

module.exports = HomeContorller;