//Node modules import
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// @ts-ignore
import {browserHistory, Router} from 'react-router-3';
import reduxThunk from 'redux-thunk';


// Components import
import routes from './routers';

// Reducers import
import reducers from './reducers';

import '../styles/index.scss';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
export const store = createStoreWithMiddleware(reducers)

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('quiz-app')
)
