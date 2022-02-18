const db = require('../../data/dbConfig');

const find = () => {
  return db('resources');
};

const add = resource => {
  return db('resources').insert(resource).then(([id]) => findById(id))
};

const findById = id => {
  return db('resources').where('resource_id', id).first()
}

module.exports = {
  find,
  add
};
