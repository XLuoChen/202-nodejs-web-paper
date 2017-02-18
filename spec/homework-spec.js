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
});