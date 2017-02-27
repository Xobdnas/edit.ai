import express from 'express';
import path, {resolve} from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import Plugin from '../plugin';
import schemaModel from '../../plugins/schema/db/schema.db';
import Html from '../system/components/Html';
import App from '../system/components/App';
const app = express();

app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use('/css', express.static(path.join(__dirname, '../../../public/css')));
app.use('/js', express.static(resolve(__dirname, '../../../public/js')));


// Only works on the Server for now. Need to make it isomorphic.
const plugin = new Plugin();
const loadedRoutes = plugin.loadType('routes');

const routes = {
  path: '/',
  component: App,
  childRoutes: []
};

loadedRoutes.forEach((r) => {
  r.forEach((i) => {
    routes.childRoutes.push(i);
  });
});

app.get('/api/schema', function (req, res) {
  schemaModel.findAll().then((schemas) => {
    res.json(schemas);
  })
});

// Server Side Render.
app.get('*', function (req, res) {
  match({routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (renderProps) {
      const content = renderToString(<RouterContext {...renderProps} />)
      const html = (
        <Html content={content} />
      );

      const output = renderToString(html);
      // It's impossible to get <!doctype html> in react :-|.
      res.status(200).send('<!DOCTYPE html>' + output)

    }
    else {
      res.status(404).send('Not found')
    }
  });
})

module.exports = app;
