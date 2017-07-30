import React from 'react';
import {HomePage, ContactPage, ErrorPage} from './pages/index';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'


export default class Routers extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <nav className='navbar navbar-default'>
                        <div className='container-fluid'>
                            <ul className='nav navbar-nav'>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>
                                <li><Link to='/contactre'>Error</Link></li>
                            </ul>
                        </div>
                    </nav>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/contact" component={ContactPage}/>
                        <Route  component={ErrorPage}/>
                    </Switch>
                </div>
            </Router>
        );
    }

}
