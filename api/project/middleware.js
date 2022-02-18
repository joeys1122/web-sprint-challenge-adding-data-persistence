
exports.checkProject = (req, res, next) => {
  if (!req.body.project_name) {
    next({ status: 400, message: 'Please enter a project name'})
  } else {
    next();
  }
}