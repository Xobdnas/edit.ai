import Sequelize from 'sequelize';

// TODO: Env variable.
export default new Sequelize('editor', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});
