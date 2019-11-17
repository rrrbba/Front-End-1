import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import { snackReducer } from './Store/Reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

const store = createStore(snackReducer, applyMiddleware(thunk, logger))

const rootElement = document.getElementById('root');



ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    rootElement);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
