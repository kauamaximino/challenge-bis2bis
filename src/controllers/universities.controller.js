const universitiesService = require('../services/universities.service');

const getAllUniversities = async (_request, response) => {
  const universities = await universitiesService.getAllUniversities();
  return response.status(200).json(universities);
}

module.exports = { getAllUniversities };