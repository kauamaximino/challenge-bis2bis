const universitiesService = require('../services/universities.service');

const getUniversities = async (request, response) => {
  const { country } = request.query;

  if (country) {
    const universities = await universitiesService.getUniversitiesByCountry(country);
    return response.status(200).json(universities);
  }

  const universities = await universitiesService.getAllUniversities();
  return response.status(200).json(universities);
}

module.exports = { getUniversities };