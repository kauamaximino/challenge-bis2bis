const universities = require('express').Router();
const universitiesController = require('../controllers/universities.controller');

universities.get('/universities', universitiesController.getAllUniversities);

module.exports = universities;