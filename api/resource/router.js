const express = require('express');
const model = require('./model');
const { checkResource } = require('./middleware');

const router = express.Router();

router.get('/', (req, res, next) => {
  model.find()
    .then(resource => res.json(resource))
    .catch(next);
});

router.post('/', checkResource, (req, res, next) => {
  model.add(req.body)
    .then(resource => {
      res.status(201).json(resource)
    })
    .catch(next)
});

module.exports = router;
