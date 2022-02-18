const db = require('../../data/dbConfig');

const find = () => {
  return db('resources');
};

const add = (resource) => {
  console.log(resource)
};

module.exports = {
  find,
  add
};
