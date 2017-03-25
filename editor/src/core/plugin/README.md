# Plugin Core module

declare a plugin loader api, similar to Architect (c9) & Plugin Loader (Pattern-lab)

- Event Emmiter Class? 

Possible Usages:

- Router:
```
  // Example of potential Plugin:
  const router = express.Router()
  
  const plugin = require('Core/plugin')
  const plugins = new Plugin()
  const loadedRoutes = plugins.loadType('routes');
 
  // Load plugins
  // 1. consult enabled module
  // 2. Which enabled modules have routes?
  // 3. require each route file in a loop while { [].push(require('plugin-1/routes'))}
  // 4. return the large array with all the routes
  // 5. add it to router.use();
  let plugins_with_routes = plugins.load('routes');
  // Does it return the modules? or the files already loaded into array?
  router.use(routes);
```
 
 
 
## Right now:
```
const plugin = new Plugin()
const loadedRoutes = plugin.loadType('routes');
```

plugins loaded from `./src/plugins.json`
