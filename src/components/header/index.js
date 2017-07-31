import React from 'react';

import {
    Link

} from 'react-router-dom'




export default class Header extends React.Component {

    render() {
        return (
            <div className="header">
                    <nav className='navbar navbar-default'>
                        <div className='container-fluid'>
                            <ul className='nav navbar-nav'>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>
                                <li><Link to='/contactre'>Error</Link></li>
                            </ul>
                        </div>
                    </nav>
            </div>
        );
    }

}
