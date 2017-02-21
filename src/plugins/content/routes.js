import React from 'react';
import Article from './component/Article';

/**
 * Routes need to be no-name export for now. These only work with React component right now:
 * {path: "/path-from-root", component: MyAppComponent}
 */
module.exports = [
  {
    path: '/create',
    component: Article
  }
];
