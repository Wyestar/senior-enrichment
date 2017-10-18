const db = require('./index');
// const Sequelize = require('sequelize');

const Students = db.define('students', {
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    unique: true
  }
  // campusId: {
  //   type: Sequelize.STRING,
  //   allowNull: false
  // }
})

module.exports = Students;
