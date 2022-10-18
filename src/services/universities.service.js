const { Universities } = require('../models/Universities');

const getAllUniversities = async () => {
  const universities = await Universities.find({}).select('-__v').select('-alpha_two_code')
  return universities;
}

const getUniversitiesByCountry = async (country) => {
  const universities = await Universities.find({ country }).select('-__v').select('-alpha_two_code').limit(20);
  return universities;
}

const getUniversityById = async (id) => {
  try {
    const university = await Universities.findById(id).select('-__v').select('-alpha_two_code');
    console.log(university);
    return university;
  } catch (error) {
    throw new Error('University not found');
  }
}

const createUniversity = async (alpha_two_code, web_pages, name, country, domains) => {

  const verifyUniversity = await Universities.findOne({ name, country });

  if (verifyUniversity) {
    throw new Error('University already exists');
  }

  const newUniversity = await Universities.create({ alpha_two_code, web_pages, name, country, domains });

  return newUniversity;
}

module.exports = {
  getAllUniversities,
  getUniversitiesByCountry,
  getUniversityById,
  createUniversity,
};