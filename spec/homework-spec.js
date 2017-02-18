require('should');
const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);

const Homework = require('../model/homework');
const refresh = require('../tool/refreshMongo');

describe('HomeworkController', () => {
  beforeEach(() => {
    refresh();
  });

  it('GET /homeworks should return all homeworks', (done) => {
    request
      .get('/homeworks')
      .expect(200)
      .expect((res) => {
        res.body.totalCount.should.equal(2);
      })
      .end(done);
  });

  it('GET /homeworks/:homeworkId', (done) => {
    request
      .get('/homeworks/587f0f2586653d19297d40c2')
      .expect(200)
      .expect((res) => {
        res.body.should.eql({
          _id: '587f0f2586653d19297d40c2',
          title: 'React',
          stack: 'JavaScript',
          __v: 0
        });
      })
      .end(done);
  });

  it('POST /homeworks', (done) => {
    const homework = {
      title: 'Gradle',
      stack: 'Java'
    };

    request
      .post('/homeworks')
      .send(homework)
      .expect(201)
      .expect((res) => {
        Homework.findOne(homework, (err, doc) => {
          res.body.uri.should.equal(`homeworks/${doc._id}`);
        });
      })
      .end(done);
  });

  it('DELETE /homeworks/:homeworkId', (done) => {
    request
      .delete('/homeworks/587f0f2586653d19297d40c2')
      .expect(204)
      .end(done);
  });

  it('PUT /homeworks/:homeworkId', (done) => {
    const homework = {
      title: 'Redux',
      stack: 'JavaScript'
    };
    request
      .put('/homeworks/587f0f2586653d19297d40c2')
      .send(homework)
      .expect(204)
      .end(done);
  });
});