// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js

const Promise = require("bluebird");
const {
  index,
  campuses,
  students,
} = require('../db/models');

const data = {
  student: [
    {
      name: "John Doe",
      campus: {
        name: "NY",
        image: "http://via.placeholder.com/350x350"
      },
      email: "me@mail.com"
    }

  ]
};

index
  .sync({ force: true })
  .then(function() {
    console.log("Dropped old data, now inserting data");
    return Promise.map(Object.keys(data), function(name) {
      return Promise.map(data[name], function(item) {
        return index.model(name).create(item, {
          include: [Campus]
        });
      });
    });
  })
  .then(function() {
    console.log("Finished inserting data");
  })
  .catch(function(err) {
    console.error("There was totally a problem", err, err.stack);
  })
  .finally(function() {
    index.close(); // uses promises but does not return a promise. https://github.com/sequelize/sequelize/pull/5776
    console.log("connection closed"); // the connection eventually closes, we just manually do so to end the process quickly
    return null; // silences bluebird warning about using non-returned promises inside of handlers.
  });
