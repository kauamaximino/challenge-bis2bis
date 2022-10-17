const insert = require('./insert.routes');
const universities = require('./universities.routes');

const router = require('express').Router();

router.use(insert, universities);


module.exports = router;
