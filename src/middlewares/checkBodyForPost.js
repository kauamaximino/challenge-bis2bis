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

const validateBodyPost = (request, response, next) => {
  const { alpha_two_code, web_pages, name, country, domains } = request.body;

  if (!alpha_two_code || alpha_two_code.length < 2) {
    return response.status(400).json({ message: 'Invalid alpha_two_code. Try again.' });
  }

  if (!web_pages || typeof web_pages !== 'object' || web_pages.length === 0) {
    return response.status(400).json({ message: 'Invalid web_pages. Try again.' });
  }

  if (!name) {
    return response.status(400).json({ message: 'Invalid name. Try again.' });
  }

  if (!country || !countries.includes(country)) {
    return response.status(400).json({ message: 'Invalid country. Try again.' });
  }

  if (!domains || typeof domains !== 'object' || domains.length === 0) {
    return response.status(400).json({ message: 'Invalid domains. Try again.' });
  }

  next();
}

module.exports = validateBodyPost;