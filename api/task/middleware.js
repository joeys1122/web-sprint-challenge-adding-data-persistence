const db = require('../../data/dbConfig');

exports.checkTask = async (req, res, next) => {
  if (!req.body.project_id) {
    next({ status: 400, message: 'Please enter a project id'});
  } else {
    const checkProjExists = await db('projects').where('project_id', req.body.project_id).first()
    if (!checkProjExists) {
      next({ status: 400, message: `Could not find project with id ${req.body.project_id}`})
    }
  }
  
  if (!req.body.task_description) {
    next({ status: 400, message: 'Please enter a task description'})
  } else {
    next();
  }
}

exports.fixCompleted = (task) => {
  if(task.task_completed === 1) {
    task.task_completed = true;
  } else {
    task.task_completed = false;
  }
  return task;
}