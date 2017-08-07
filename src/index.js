import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import todoApp from './reducers/index'
import  DevTools  from './utils/devtools';

import App from './app';


import {addTodo}  from './actions/index';


function _applyMiddleware() {
    const middleware = [

    ];

    return applyMiddleware(...middleware);
}


function configureStore(initialState) {
    const store = compose(
        _applyMiddleware(),
        DevTools.instrument()
    )(createStore)(todoApp, initialState);

    return store;
}
const store = configureStore();

store.dispatch(addTodo('asdasdaw'));
store.dispatch(addTodo('a123aw'));
store.dispatch(addTodo('14412412asdaw'));

console.log(store.getState());


ReactDOM.render((
        <Provider store={ store }>
            <App />
        </Provider>
),
document.querySelector('#app'));
