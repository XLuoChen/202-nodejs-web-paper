require('should');
const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);

const Paper = require('../model/paper');
const refresh = require('../tool/refreshMongo');

describe('PaperController', () => {
  beforeEach(() => {
    refresh();
  });

  it('GET /papers', (done) => {
    request
      .get('/papers')
      .expect(200)
      .expect((res) => {
        res.body.totalCount.should.equal(1);
      })
      .end(done);
  });

  it('GET /papers/:paperId', (done) => {
    request
      .get('/papers/587f0f2586653d19297d40c8')
      .expect(200)
      .expect((res) => {
        res.body.should.eql({
          _id: '587f0f2586653d19297d40c8',
          sections: [{
            _id: '587f0f2586653d19297d40c37',
            section: '587f0f2586653d19297d40c6'
          }],
          __V: 0
        });
      })
      .end(done);
  });

  it('POST /papers', (done) => {
    const section = {
      sections: [{
        _id: '587f0f2586653d19297d40c37',
        section: '587f0f2586653d19297d40c7'
      }]
    };
    request
      .post('/papers')
      .send(section)
      .expect(201)
      .expect((res) => {
        Section.findOne(section, (err, doc) => {
          res.body.uri.should.equal(`papers/${doc._id}`);
        });
      })
      .end(done);
  });

  it('DELETE /papers/:paperId', (done) => {
    request
      .delete('/papers/587f0f2586653d19297d40c8')
      .expect(204)
      .end(done);
  });

  it('PUT /papers/:paperId', (done) => {
    const section = {
      sections: [{
        _id: '587f0f2586653d19297d40c37',
        section: '587f0f2586653d19297d40c7'
      }]
    };
    request
      .put('/papers/587f0f2586653d19297d40c8')
      .send(section)
      .expect(204)
      .end(done);
  });
});
