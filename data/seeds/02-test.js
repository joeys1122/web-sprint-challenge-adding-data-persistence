const projects = [
  {project_name: 'Test Project 1'},
  {project_name: 'Test Project 2', project_description: 'This is a test project description'},
  {project_name: 'Test Project 3', project_description: 'This is another test project description', project_completed: true}
]

const resources = [
  {resource_name: 'Knex'},
  {resource_name: 'SQLite Studio', resource_description: 'This is a test resource description'},
  {resource_name: 'Postman'},
  {resource_name: 'Visual Studio Code', resource_description: 'This is a test resource description'}
]

const tasks = [
  {task_description: 'This is the test description for task 1', project_id: 1},
  {task_description: 'This is the test description for task 2', project_id: 2, task_notes: 'These are test notes'},
  {task_description: 'This is the test description for task 3', project_id: 3, task_notes: 'These are test notes', task_completed: true},
  {task_description: 'This is the test description for task 4', project_id: 1, task_notes: 'These are test notes'},
  {task_description: 'This is the test description for task 5', project_id: 1, task_notes: 'These are test notes', task_completed: true},
  {task_description: 'This is the test description for task 6', project_id: 2}
]

const project_resources = [
  {project_id: 1, resource_id: 1},
  {project_id: 1, resource_id: 2},
  {project_id: 2, resource_id: 2},
  {project_id: 2, resource_id: 3},
  {project_id: 2, resource_id: 4},
  {project_id: 3, resource_id: 4}
]

exports.seed = async function(knex) {
  await knex('projects').insert(projects)
  await knex('resources').insert(resources)
  await knex('tasks').insert(tasks)
  await knex('project_resources').insert(project_resources)
};
