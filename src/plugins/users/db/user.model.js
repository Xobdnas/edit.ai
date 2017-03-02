import db, { Sequelize } from '_core/db';


/**
 * User {
 *   email, // Always used to logged in.
 *   password,
 *   username, // Username/Display name
 *
 *   // Future Ideas.
 *   team/account name? // Shouldn't do this, because multiple teams?
 * }
 */
var User = db.define('user', {
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
});

module.exports = User;
