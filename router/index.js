const homeworks = require('./routers/homeworks');
const sections = require('./routers/sections');

module.exports = function (app) {
  app.use('/homeworks', homeworks);
  app.use('/sections', sections);
};