const db = require('../../data/dbConfig');
const { fixCompleted } = require('./middleware');

const find = async () => {
  const tasks = await db('tasks as t')
    .leftJoin('projects as p', 'p.project_id', 't.project_id')
    .select('t.*', 'p.project_name', 'p.project_description')

  tasks.forEach(task => {
    fixCompleted(task);
  });

  return tasks;
};

const add = (task) => {
  return db('tasks').insert(task).then(async ([id]) => {
    const newTask = await findById(id);
    fixCompleted(newTask);
    return newTask;
  });
};

const findById = id => {
  return db('tasks').where('task_id', id).first()
};

module.exports = {
  find,
  add
};
