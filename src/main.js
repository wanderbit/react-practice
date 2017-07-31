import React from 'react';
import {HomePage, ContactPage, ErrorPage} from './pages/index';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'


export default class Main extends React.Component {

    render() {
        return (
            <div className="main">
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/contact" component={ContactPage}/>
                    <Route component={ErrorPage}/>
                </Switch>
            </div>
        );
    }

}