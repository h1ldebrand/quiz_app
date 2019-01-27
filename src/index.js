//Node modules import
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {browserHistory, Router} from 'react-router-3';
import reduxThunk from 'redux-thunk';


// Components import
import routes from './routers';

// Reducers import
import reducers from './reducers';

import '../styles/index.scss';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('quiz-app')
)
