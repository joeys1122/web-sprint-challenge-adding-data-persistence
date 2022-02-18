const db = require('../../data/dbConfig');
const { fixCompleted } = require('./middleware');

const find = async () => {
  const projects = await db('projects');

  projects.forEach(project => {
    fixCompleted(project);
  });

  return projects;
};

const add = project => {
  return db('projects').insert(project).then(async ([id]) => {
    const newProj = await findById(id);
    fixCompleted(newProj);
    return newProj;
  });
};

const findById = id => {
  return db('projects').where('project_id', id).first()
}

module.exports = {
  find,
  add
};
