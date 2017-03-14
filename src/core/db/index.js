import Sequelize from 'sequelize';
const pg = require('pg');

let db;

// Heroku or local.
if (process.env.DATABASE_URL) {
  pg.defaults.ssl = true;
  db = new Sequelize(process.env.DATABASE_URL);
}
else {
  db = new Sequelize('editor', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  });
}

export default db;
export { Sequelize };
