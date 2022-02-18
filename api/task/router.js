const express = require('express');
const model = require('./model');
const { checkTask } = require('./middleware');

const router = express.Router();

router.get('/', (req, res, next) => {
  model.find()
    .then(tasks => res.json(tasks))
    .catch(next);
});

router.post('/', checkTask, (req, res, next) => {
  model.add(req.body)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(next);
});

module.exports = router;
