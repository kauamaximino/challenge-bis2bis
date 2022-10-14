const mongoose = require('mongoose');

const Universities = mongoose.model('Universities', {
  state_province: String,
  alpha_two_code: String,
  web_pages: Array,
  country: String,
  name: String,
  domains: Array,
});

module.exports = { Universities };