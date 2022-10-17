const { Universities } = require('../models/Universities');

const getAllUniversities = async () => {
  const universities = await Universities.find({}).select('-__v').select('-alpha_two_code')
  return universities;
}

module.exports = { getAllUniversities };