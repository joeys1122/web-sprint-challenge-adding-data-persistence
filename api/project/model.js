const db = require('../../data/dbConfig');

const find = async () => {
  const projects = await db('projects');

  projects.forEach(project => {
    if(project.project_completed === 1) {
      project.project_completed = true;
    } else {
      project.project_completed = false;
    }
  });

  return projects;
};

const add = project => {
  return db('projects').insert(project).then(async ([id]) => {
    const newProj = await findById(id);

    if(newProj.project_completed === 1) {
      newProj.project_completed = true;
    } else {
      newProj.project_completed = false;
    }

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
