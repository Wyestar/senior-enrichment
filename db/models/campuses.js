const db = require('./index');
// const Sequelize = require('sequelize');

const Campuses = db.define('campuses', {
  name: Sequelize.STRING,
  image: Sequelize.STRING
  // image url will be a string
  // needs student association, none to many
})

module.exports = Campuses;
