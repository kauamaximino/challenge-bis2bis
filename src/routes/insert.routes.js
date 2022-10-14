const insert = require('express').Router();
const { Universities } = require('../models/Universities');
const { getUniversities } = require('../models/getAllUniversitiesInAPI');

insert.post('/insert-in-database', async (_request, response) => { 
  const universitys = await Universities.create(await getUniversities());
  return response.status(201).json(universitys);
});


module.exports = insert;