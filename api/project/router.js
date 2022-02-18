const express = require('express');
const model = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
  model.find()
    .then(projects => res.json(projects))
    .catch(next);
});

router.post('/', (req, res) => {

});

module.exports = router;