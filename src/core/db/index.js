import Sequelize from 'sequelize';
var pg = require('pg');

let sequelize;

// Heroku or local.
if (process.env.DATABASE_URL) {
  pg.defaults.ssl = true;
  sequelize = new Sequelize(process.env.DATABASE_URL);
}
else {
  sequelize = new Sequelize('editor', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  });
}

export default sequelize;
