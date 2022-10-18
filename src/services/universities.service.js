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

const updateUniversity = async (id, web_pages, name, domains) => {
  const updatedUniversity = await Universities.findByIdAndUpdate(id, { web_pages, name, domains }, { new: true });
  return updatedUniversity;
}

const deleteUniversity = async (id) => {
  const deleteUniversity = await Universities.findByIdAndDelete(id);
  return deleteUniversity;
}

module.exports = {
  getAllUniversities,
  getUniversitiesByCountry,
  getUniversityById,
  createUniversity,
  updateUniversity,
  deleteUniversity,
};