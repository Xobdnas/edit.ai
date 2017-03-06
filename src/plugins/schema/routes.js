import AddShema from './component/addSchema';
import SchemaForm from './component/SchemaForm';
import SchemaList from './component/schemaList';

/**
 * Routes need to be no-name export for now. These only work with React component right now:
 * {path: "/path-from-root", component: MyAppComponent}
 */
module.exports = [
  {
    path: '/schema/add',
    component: AddShema
  },
  {
    path: '/add',
    component: SchemaList
  },
  {
    path: '/add/:schema',
    component: SchemaForm
  },
];
