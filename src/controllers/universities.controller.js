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

const getUniversityById = async (request, response) => {
  try {
    const { id } = request.params;
    const university = await universitiesService.getUniversityById(id);
  return response.status(200).json(university);
  } catch(error) {
    return response.status(404).json({ message: error.message });
  }
}

const createUniversity = async (request, response) => {
  try {
    const { alpha_two_code, web_pages, name, country, domains } = request.body;
    const newUniversity = await universitiesService.createUniversity(alpha_two_code, web_pages, name, country, domains);
    return response.status(201).json(newUniversity);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
}

module.exports = {
  getUniversities,
  getUniversityById,
  createUniversity,
};