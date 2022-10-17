const insertService = require('../services/insert.service');

const insertInDatabase = async (_request, response) => {
  const universitys = await insertService.insertInDatabase();
  return response.status(201).json(universitys);
}

module.exports = { insertInDatabase };