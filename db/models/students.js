const db = require('../index');
const Sequelize = require('sequelize');
const Campuses = require('./campuses');

const Students = db.define('students', {
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    unique: true
  }
}, {
  defaultScope: {
    include: [Campuses]
  }
});


module.exports = Students;
