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

  if (country && !countries.includes(country)) {
    return response.status(400).json({ message: 'Invalid country name' });
  }

  next();
}  


module.exports = validateNameCountry;