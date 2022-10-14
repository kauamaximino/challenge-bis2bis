const router = require('express').Router();

const insert = require('./insert.routes');

router.use(insert);

module.exports = router;
