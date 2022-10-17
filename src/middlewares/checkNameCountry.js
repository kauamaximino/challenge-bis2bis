const countries = [
  "Argentina",
  "Brazil",
  "Chile",
  "Colombia",
  "Paraguay",
  "Peru",
  "Suriname",
  "Uruguay"
]

const  validateNameCountry = (request, response, next) => {
  const { country } = request.query;

  if (!countries.includes(country)) {
    return response.status(400).json({ message: 'Country not found' });
  }
  next();
  }  


module.exports = validateNameCountry;