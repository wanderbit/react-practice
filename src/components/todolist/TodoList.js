import React from 'react'
import PropTypes from 'prop-types'


export default class TodoList extends React.Component {
    render() {
        return (
            <ol>
                {this.props.todos.map(todo =>

                   <li key={todo.id}>{todo.text}
                       <button className='btn' onClick={ this.deleteTodo.bind(this, item) }><i className='glyphicon glyphicon-remove' /></button>
                       <button className={ btnClasses } onClick={ this.likeTodo.bind(this, item) }><i className='glyphicon glyphicon-heart' /></button>
                   </li>
                )}
            </ol>
        );
    }
}



