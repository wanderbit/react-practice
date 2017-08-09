import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.less';

import {likeTodo, deleteTodo}  from '../../actions/index';
import classnames from 'classnames';
export default class TodoList extends React.Component {


    deleteTodo(todo) {

        this.props.dispatch( deleteTodo(todo) );

    }

    likeTodo(id) {
        console.log(id);
        this.props.dispatch( likeTodo(id) );
    }

    renderTodos(todo) {
        const todoClasses = classnames(styles.line, {
            [styles.liked]: todo.liked
        });

        return (
            <li key={todo.id}  className={ todoClasses } >{todo.text}
                <button className={styles.button} onClick={ this.deleteTodo.bind(this, todo.id) }><i className='glyphicon glyphicon-remove' /></button>
                <button className={styles.button} onClick={ this.likeTodo.bind(this, todo.id) }><i className='glyphicon glyphicon-heart' /></button>
            </li>
        );
    }

    render() {
        return (
            <ol>

                {this.props.todos.map( this.renderTodos.bind(this))}
            </ol>
        );
    }
}



