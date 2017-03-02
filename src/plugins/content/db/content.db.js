import db, { Sequelize } from '_core/db';


db.define('content', {
  name: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.STRING
  }
});
