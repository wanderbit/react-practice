import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import {HomePage} from '../../pages/home/index';
import {ContactPage} from '../../pages/contact/index';

export default class Header extends React.Component {

    render() {
        return (

            <Router>
                <div>
                    <nav className='navbar navbar-default'>
                        <div className='container-fluid'>
                            <ul className='nav navbar-nav'>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>
                            </ul>
                        </div>
                    </nav>

                    <Route exact path="/" component={HomePage}/>
                    <Route path="/contact" component={ContactPage}/>
                </div>
            </Router>
        );
    }

}
