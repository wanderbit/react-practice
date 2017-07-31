import React from 'react';
import {
    BrowserRouter as Router
} from 'react-router-dom'

import Header from './components/header';
import Main from './main';

export default class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                   <Header/>
                   <Main />
                </div>
            </Router>
        );
    }

}