import db from '_core/db';
import Plugin from '_core/plugin';


// We don't have to do anything except load the module into our app.
const plugin = new Plugin();
plugin.loadType('db');

// Set up all tables.
// TODO: Promp about everything about to get deleted.
db.sync({force:true});
