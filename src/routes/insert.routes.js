const insert = require('express').Router();
const insertController = require('../controllers/insert.controller');

insert.post('/insert-in-database', insertController.insertInDatabase);

module.exports = insert;