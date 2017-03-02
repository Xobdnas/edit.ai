import db, { Sequelize } from '_core/db';


// Export the Schema model.
export default db.define('schemas', {
  name: {
    type: Sequelize.STRING
  },
  label: {
    type: Sequelize.STRING
  },
  form_schema: {
    type: Sequelize.JSON
  },
  ui_schema: {
    type: Sequelize.JSON
  }
});
