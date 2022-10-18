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

const validateBodyPut = (request, response, next) => {
  const { web_pages, name, domains } = request.body;

  if (!web_pages || typeof web_pages !== 'object' || web_pages.length === 0) {
    return response.status(400).json({ message: 'Invalid web_pages. Try again.' });
  }

  if (!name || name.length < 6) {
    return response.status(400).json({ message: 'Invalid name. Try again.' });
  }

  if (!domains || typeof domains !== 'object' || domains.length === 0) {
    return response.status(400).json({ message: 'Invalid domains. Try again.' });
  }

  next();
}

module.exports = validateBodyPut;