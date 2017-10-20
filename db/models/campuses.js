const db = require('../index');
const Sequelize = require('sequelize');

const Campuses = db.define('campuses', {
  name: Sequelize.STRING,
  image: Sequelize.STRING
})

module.exports = Campuses;
