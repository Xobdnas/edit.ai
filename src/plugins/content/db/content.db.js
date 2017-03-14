// TODO: Want us to inclue via "core/" package aka "core/db"
// What is below is just an idea, not real.
// const db = require('core/db')
import db, { Sequelize } from '../../../core/db';

db.define('content', {
  name: {
    type: Sequelize.STRING,
  },
  content: {
    type: Sequelize.STRING
  }
});

