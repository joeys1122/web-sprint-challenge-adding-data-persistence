const express = require('express');
const model = require('./model');
const { checkProject } = require('./middleware');

const router = express.Router();

router.get('/', (req, res, next) => {
  model.find()
    .then(projects => res.json(projects))
    .catch(next);
});

router.post('/', checkProject, (req, res, next) => {
  model.add(req.body)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(next);
});

module.exports = router;