import SchemaAdd from './component/SchemaAdd';
import SchemaForm from './component/SchemaForm';


/**
 * Routes need to be no-name export for now. These only work with React component right now:
 * {path: "/path-from-root", component: MyAppComponent}
 */
module.exports = [
  {
    path: '/schema/add',
    component: SchemaAdd
  },
  {
    path: '/add/:schema',
    component: SchemaForm
  },
];
