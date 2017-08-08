import React from 'react';
import { bindAll } from 'lodash';
import styles from './styles.less';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

export default class HomePage extends React.Component {

    render() {
        return (
            <div className={styles.grey_back}>
                <VisibleTodoList />
                <AddTodo />
            </div>
        );
    }
 
}
