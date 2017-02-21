const server = require('./core/server');

import React from 'react';
import ReactDOMServer from 'react-dom/server';


import App from './core/system/components/App';
import Html from './core/system/components/Html';


server.listen(3000, () => {
    console.log('App listening on port 3000!')
});
