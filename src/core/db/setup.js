const Sequelize = require('sequelize'),
  Users = require('./user');

// Set up user table.
Users.sync({force: true}).then(function () {
  // Create User Table.
  return Users.create({
    username: 'admin@admin',
    password: 'admin'
  });
});
