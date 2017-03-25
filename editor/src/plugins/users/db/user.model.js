// TODO: Want us to inclue via "core/" package aka "core/db"
// What is below is just an idea, not real.
const db = require('core/db'), // db should have the Sequelize object exposed under db.Sequelize without having to do
  // anything, so people should be able to do `import DB, {Sequelize} from 'core/db'`
  Sequelize = require('sequelize');

/**
 *
 User {
  email, // Always used to logged in.
  password,
  username, // Username/Display name

  // Future Ideas.
  team/account name? // Shouldn't do this, because multiple teams?
}
 */
var User = db.define('user', {
  username: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING
  }
});

module.exports = User;
