import React from 'react';
import { Header } from './components/index';
import { DevTools } from './utils/index';

export default class App extends React.Component {
    

    render() {
        return (
            <div>
                <Header />
                { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
            </div>
        );
    }

}
