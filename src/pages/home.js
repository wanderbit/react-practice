import React from 'react';
import { bindAll } from 'lodash';
//import './styles.less';
import AddTodo from '../containers/AddTodo';

export default class HomePage extends React.Component {

    render() {
        return (
            <div>
                <AddTodo />
            </div>
        );
    }

}
