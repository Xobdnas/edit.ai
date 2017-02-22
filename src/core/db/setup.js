import db from '../db';
import Plugin from '../plugin';

// We don't have to do anything except load the module into our app.
const plugin = new Plugin();
const loadedRoutes = plugin.loadType('db');

// Set up all tables.
// TODO: Promp about everything about to get deleted.
db.sync({force:true});

