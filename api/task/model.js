const db = require('../../data/dbConfig');

const find = async () => {
  const tasks = await db('tasks')

  tasks.forEach(task => {
    if(task.task_completed === 1) {
      task.task_completed = true;
    } else {
      task.task_completed = false;
    }
  });

  return tasks;
};

const add = (task) => {
  
};

module.exports = {
  find,
  add
};
