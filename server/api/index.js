'use strict'
const api = require('express').Router()
// const db = require('../db')
const db = require('../../db')
const Sequelize = require('sequelize');

// /Users/lianalim/senior-enrichment/db/models/campuses.js

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))

// routes here for now?
api.get('/', (req, res, next) => {
  // console.log(db)
  db.models.campuses.findAll()
  .then(campuses => res.json(campuses))
  .catch(next)
});

api.get('/campuses', (req, res, next) => {
  // console.log(db)
  db.models.campuses.findAll()
  .then(campuses => res.json(campuses))
  .catch(next)
});

api.get('/campus/:id', (req, res, next) => {
  // console.log(db)
  db.models.campuses.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(campus => res.json(campus))
  .catch(next)
});

api.put('/campus/:id', (req, res, next) => {
    db.models.campuses.update(req.body, { where: { id: req.params.id } }).then(campus => res.status(200).json(campus)).catch((err) => {
        console.log(err)
    })
});

api.post('/campus', (req, res, next) => {
    db.models.campuses.create(req.body).then(campus => res.status(201).json(campus)).catch((err) => {
        console.log(err)
    })
})

api.delete('/campus/:id', (req, res, next) => {
    db.models.campuses.destroy({ where: { id: req.params.id } }).then(campus => res.status(200).json(campus)).catch((err) => {
        console.log(err)
    })
});

api.get('/students', (req, res, next) => {
  // console.log(db)
  db.models.students.findAll()
  .then(students => res.json(students))
  .catch(next)
});

api.get('/student/:id', (req, res, next) => {
  db.models.students.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(student => res.json(student))
  .catch(next)
});

api.post('/student', (req, res, next) => {
    console.log(req.body)
  db.models.students.create(req.body).then(student => res.status(201).json(student)).catch((err) => {
    console.log(err)
  })
});

api.put('/student/:id', (req, res, next) => {
    db.models.students.update(req.body, { where: { id: req.params.id } }).then(student => res.status(200).json(student)).catch((err) => {
        console.log(err)
    })
});

api.delete('/student/:id', (req, res, next) => {
    db.models.students.destroy({ where: { id: req.params.id } }).then(student => res.status(200).json(student)).catch((err) => {
        console.log(err)
    })
});

module.exports = api
