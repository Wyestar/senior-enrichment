const db = require('../index');
const Sequelize = require('sequelize');

const Students = db.define('students', {
  // id: {
  //   type: Sequelize.INTEGER,
  //   primaryKey: true
  // },
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  // campusId: {
  //   type: Sequelize.STRING,
  //   allowNull: false
  // }
  // createdAt: Sequelize.DATE,
  // updatedAt: Sequelize.DATE
})

module.exports = Students;
