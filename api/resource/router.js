const express = require('express');
const model = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
  model.find()
    .then(resource => res.json(resource))
    .catch(next);
});

router.post('/', (req, res) => {

});

module.exports = router;
