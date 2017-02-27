import SchemaAdd from './component/SchemaAdd';

/**
 * Routes need to be no-name export for now. These only work with React component right now:
 * {path: "/path-from-root", component: MyAppComponent}
 */
module.exports = [
  {
    path: '/schema/add',
    component: SchemaAdd
  }
];
