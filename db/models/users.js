const db = require('../index');
const Sequelize = require('sequelize');

const Users = db.define('users', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  admin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Users;
