const express = require('express');
const model = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
  model.find()
    .then(tasks => res.json(tasks))
    .catch(next);
});

router.post('/', (req, res) => {

});

module.exports = router;
