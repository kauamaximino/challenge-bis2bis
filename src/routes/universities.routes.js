const universities = require('express').Router();
const universitiesController = require('../controllers/universities.controller');
const middlewares = require('../middlewares/index');

universities.get('/universities', middlewares.checkNameCountry, universitiesController.getUniversities);

universities.get('/universities/:id', universitiesController.getUniversityById);

universities.post('/universities', middlewares.checkBody, universitiesController.createUniversity);

module.exports = universities;