const axios = require('axios');

const countries = [
"argentina",
"brazil",
"chile",
"colombia",
"paraguay",
"peru",
"suriname",
"uruguay"
]

const getUniversities = async () => {
  const universities = countries.map(async (country) => {
    const { data } = await axios.get(`http://universities.hipolabs.com/search?country=${country}`);
    return data;
  });

  const finish = await Promise.all(universities);
  return finish.flat();
};

module.exports = { getUniversities };