// Node modules import
import React from 'react';

// @ts-ignore
import { Route, IndexRoute } from 'react-router-3';

// Components import
import App from './components/app';
import Main from './components/main';
import About from './components/about';

// Routes definition
export default (
    <Route path="/"  components={App} >
        <IndexRoute components={Main} />
        <Route path="/about" components={About} />
    </Route>
)

