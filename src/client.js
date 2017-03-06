import 'isomorphic-fetch';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import App from './core/system/components/App';
import Login from 'plugins/users/component/login';
import Reset from 'plugins/users/component/reset';
import Article from 'plugins/content/component/Article';
import AddSchema from 'plugins/schema/component/addSchema';
import SchemaList from 'plugins/schema/component/schemaList';
import SchemaForm from 'plugins/schema/component/SchemaForm';
import store from './store';

// TODO: Fix plugin loader to work client/server side.
// Only works on the Server for now. Need to make it isomorphic.
// Can't run the plugin loader.
// const plugin = new Plugin()
// const loadedRoutes = plugin.loadType('routes');

const routes = {
  path: '/',
  component: App,
  childRoutes: [
    { path: '/login', component: Login },
    { path: '/reset', component: Reset },
    { path: '/create', component: Article },
    { path: '/schema/add', component: AddSchema },
    { path: '/add', component: SchemaList },
    { path: '/add/:schema', component: SchemaForm },
  ]
};

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('content')
);
