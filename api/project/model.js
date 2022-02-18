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

const add = (project) => {
  console.log(project)
};

module.exports = {
  find,
  add
};
