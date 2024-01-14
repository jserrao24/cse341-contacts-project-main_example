const router = require('express').Router();

router.get('/', (req, res) => {res.send('hello world');});

router.get('/contacts', require('./contacts'));
module.exports = router;