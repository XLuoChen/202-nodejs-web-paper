const async = require('async');
const Section = require('../model/section');

class SectionController {
  getAll(req, res, next) {
    async.series({
      items: (cb) => {
        Section.find({}, cb);
      },
      totalCount: (cb) => {
        Section.count(cb);
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
    const sectionId = req.params.sectionId;
    Section.findById(sectionId, (err, doc) => {
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
    const sectionId = req.params.sectionId;
    Section.findOneAndRemove({'_id': sectionId}, (err, doc) => {
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
    const sectionId = req.params.sectionId;
    console.log(req.body)
    Section.findOneAndUpdate({'_id': sectionId}, req.body, (err, doc) => {
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
    Section.create(req.body, (err, doc) => {
      if (err) {
        return next(err);
      }
      return res.status(201).send({uri: `sections/${doc._id}`});
    });
  }
}

module.exports = SectionController;