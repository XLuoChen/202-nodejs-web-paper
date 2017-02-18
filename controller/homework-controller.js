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
    }, (err, result) => {
      if (err) {
        return next(err);
      }
      return res.status(200).send(result);
    });
  }

  getOne(req, res, next) {
    const homeworkId = req.params.homeworkId;
    Homework.findById(homeworkId, (err, doc) => {
      if (err) {
        return next(err);
      }
      if (!doc) {
        return res.sendStatus(404);
      }
      return res.status(200).send(doc);
    });
  }

  create(req, res, next) {
    Homework.create(req.body, (err, doc) => {
      if (err) {
        return next(err);
      }
      return res.status(201).send({uri: `homeworks/${doc._id}`});
    });
  }

  delete(req, res, next) {
    const homeworkId = req.params.homeworkId;
    Homework.findOneAndRemove({'_id': homeworkId}, (err, doc) => {
      if (err) {
        return next(err);
      }
      if (!doc) {
        return res.sendStatus(404);
      }
      return res.sendStatus(204);
    });
  }

  update(req, res, next) {
    const homeworkId = req.params.homeworkId;
    Homework.findOneAndUpdate({'_id': homeworkId}, req.body, (err, doc) => {
      if (err) {
        return next(err);
      }
      if (!doc) {
        return res.sendStatus(404);
      }
      return res.sendStatus(204);
    });
  }
}

module.exports = HomeContorller;