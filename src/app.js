import React from 'react';
import {
    BrowserRouter as Router
} from 'react-router-dom'

import Header from './components/header';
import Main from './main';
import  DevTools  from './utils/devtools';

export default class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                   <Header/>
                   <Main />
                    { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
                </div>
            </Router>
        );
    }

}