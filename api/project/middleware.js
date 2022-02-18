
exports.checkProject = (req, res, next) => {
  if (!req.body.project_name) {
    next({ status: 400, message: 'Please enter a project name'})
  } else {
    next();
  }
}

exports.fixCompleted = (project) => {
  if(project.project_completed === 1) {
    project.project_completed = true;
  } else {
    project.project_completed = false;
  }
  return project;
}