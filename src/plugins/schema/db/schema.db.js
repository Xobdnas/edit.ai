// TODO: Want us to inclue via "core/" package aka "core/db"
// What is below is just an idea, not real.
// const db = require('core/db')
import db from '../../../core/db';
import Sequelize from 'sequelize';

// Export the Schema model.
export default db.define('schemas', {
  name: {
    type: Sequelize.STRING,
  },
  label: {
    type: Sequelize.STRING,
  },
  form_schema: {
    type: Sequelize.JSON
  },
  ui_schema: {
    type: Sequelize.JSON,
  }
});
