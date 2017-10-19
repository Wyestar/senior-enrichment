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
api.get('/campuses', (req, res, next) => {
  // console.log(db)
  db.models.campuses.findAll()
  .then(res => { console.log(res[0].dataValues)})
  // .then(campuses => res.json(campuses))
  // .catch(next)
});

module.exports = api
