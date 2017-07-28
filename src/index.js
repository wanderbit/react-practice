import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store';

const store = configureStore();

import App from './app';

ReactDOM.render((
    <Provider store={ store }>
      <App/>
    </Provider>
),
document.querySelector('#app'));
