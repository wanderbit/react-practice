import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers/index'
import App from './app';
import {addTodo}  from './actions/index';

let store = createStore(todoApp);

store.dispatch(addTodo('asdasdaw'));
store.dispatch(addTodo('a123aw'));
store.dispatch(addTodo('14412412asdaw'));
console.log(store.getState());


ReactDOM.render((
    <Provider store={ store }>
      <App/>
    </Provider>
),
document.querySelector('#app'));
