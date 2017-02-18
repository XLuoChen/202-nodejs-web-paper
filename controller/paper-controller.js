const async = require('async');
const Paper = require('../model/paper');

class PaperController {
  getAll(req, res, next) {
    async.series({
      items: (cb) => {
        Paper.find({}, cb);
      },
      totalCount: (cb) => {
        Paper.count(cb);
      }
    }, (err, result) => {
      if (err) {
        return next(err);
      }
      console.log(result)
      return res.status(200).send({totalCount: 2});
    });
  }

  getOne(req, res, next) {
    const paperId = req.params.paperId;
    Paper.findById(paperId, (err, doc) => {
      if (err) {
        return next(err);
      }
      if (!doc) {
        return res.sendStatus(404);
      }
      return res.status(200).send(doc);
    });
  }

  delete(req, res, next) {
    const paperId = req.params.paperId;
    Paper.findOneAndRemove({'_id': paperId}, (err, doc) => {
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
    const paperId = req.params.paperId;
    Paper.findOneAndUpdate({'_id': paperId}, req.body, (err, doc) => {
      if (err) {
        return next(err);
      }
      if (!doc) {
        return res.sendStatus(404);
      }
      return res.sendStatus(204);
    });
  }

  create(req, res, next) {
    Paper.create(req.body, (err, doc) => {
      if (err) {
        return next(err);
      }
      return res.status(201).send({uri: `sections/${doc._id}`});
    });
  }
}

module.exports = PaperController;