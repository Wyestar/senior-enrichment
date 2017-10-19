const db = require('../index');
const Sequelize = require('sequelize');

const Campuses = db.define('campuses', {
  // id: {
  //   type: Sequelize.INTEGER,
  //   primaryKey: true
  // },
  name: Sequelize.STRING,
  image: Sequelize.STRING
  // createdAt: Sequelize.DATE,
  // updatedAt: Sequelize.DATE
})

module.exports = Campuses;
