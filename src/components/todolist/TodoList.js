import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.less';
import {likeTodo}  from '../../actions/index';

export default class TodoList extends React.Component {


    deleteTodo(todo) {
        this.props.dispatch( deleteTodo(todo) );
    }

    likeTodo(todo) {
        this.props.dispatch( likeTodo(todo) );
    }

    render() {
        return (
            <ol>
                {this.props.todos.map(todo =>

                   <li key={todo.id}>{todo.text}
                       <button className={styles.button} onClick={ this.deleteTodo.bind(this, todo.id) }><i className='glyphicon glyphicon-remove' /></button>
                       <button className={styles.button} onClick={ this.likeTodo.bind(this, todo.id) }><i className='glyphicon glyphicon-heart' /></button>
                   </li>
                )}
            </ol>
        );
    }
}



