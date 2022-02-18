const db = require('../../data/dbConfig');

exports.checkResource = async (req, res, next) => {
  const checkIfExists = await db('resources').where('resource_name', req.body.resource_name)

  if (!req.body.resource_name) {
    next({status: 400, message: 'Please enter a resource name'});
  } else if (checkIfExists.resource_name) {
    next({ status: 400, message: `Resource with name ${req.body.resource_name} already exists` });
  } else {
    next();
  }
}