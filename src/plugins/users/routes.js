import React from 'react';
import Login from './component/login';
import Reset from './component/reset';

// This is loaded via core/server/index.js
// const plugin = new Plugin()
// const loadedRoutes = plugin.loadType('routes');
// const routes = {
//  path: '/',
//  component: App,
//  childRoutes: loadedRoutes.shift()
// };

/**
 * Routes need to be no-name export for now. These only work with React component right now:
 * {path: "/path-from-root", component: MyAppComponent}
 */
module.exports = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/reset',
    component: Reset
  },
];
