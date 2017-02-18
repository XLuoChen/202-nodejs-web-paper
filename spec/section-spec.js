// require('should');
// const supertest = require('supertest');
// const app = require('../app');
// const request = supertest(app);
//
// const Section = require('../model/section');
// const refresh = require('../tool/refreshMongo');
//
// describe('SectionController', () => {
//   beforeEach(() => {
//     refresh();
//   });
//
//   it('GET /sections', (done) => {
//     request
//       .get('/sections')
//       .expect(200)
//       .expect((res) => {
//         res.body.totalCount.should.equal(2);
//       })
//       .end(done);
//   });
//
//   it('GET /sections/:sectionId', (done) => {
//     request
//       .get('/sections/587f0f2586653d19297d40c6')
//       .expect(200)
//       .expect((res) => {
//         res.body.should.eql({
//           _id: '587f0f2586653d19297d40c6',
//           type: 'logicPuzzle',
//           homeworks: [{
//             _id: '587f0f2586653d19297d40c35',
//             homework: '587f0f2586653d19297d40c2',
//             count: 1
//           }],
//           __V: 0
//         });
//       })
//       .end(done);
//   });
//
//   it('POST /sections', (done) => {
//     const section = {
//       type: 'logicPuzzle',
//       homeworks: [{
//         _id: '587f0f2586653d19297d40c35',
//         homework: '587f0f2586653d19297d40c2',
//         count: 1
//       }]
//     };
//     request
//       .post('/sections')
//       .send(section)
//       .expect(201)
//       .expect((res) => {
//         Section.findOne(section, (err, doc) => {
//           res.body.uri.should.equal(`sections/${doc._id}`);
//         });
//       })
//       .end(done);
//   });
//
//   it('DELETE /sections/:sectionId', (done) => {
//     request
//       .delete('/sections/587f0f2586653d19297d40c6')
//       .expect(204)
//       .end(done);
//   });
//
//   it('PUT /sections/:sectionId', (done) => {
//     const section = {
//       type: 'homeworkQuiz',
//       homeworks: [{
//         _id: '587f0f2586653d19297d40c35',
//         homework: '587f0f2586653d19297d40c2',
//         count: 1
//       }]
//     };
//     request
//       .put('/sections/587f0f2586653d19297d40c6')
//       .send(section)
//       .expect(204)
//       .end(done);
//   });
// });
