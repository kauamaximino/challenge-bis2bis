const { Universities } = require('../models/Universities');
const { getUniversities } = require('../utils/api/getAllUniversitiesInAPI');


const insertInDatabase = async () => {
await Universities.deleteMany({});
  const universities = await Universities.create(await getUniversities());
  return universities;
};

module.exports = { insertInDatabase };