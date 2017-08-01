import React from 'react'
import PropTypes from 'prop-types'


export default class TodoList extends React.Component {
    render() {
        return (
            <ol>
                {this.props.todos.map(todo =>

                   <li key={todo.id}>{todo.text}</li>
                )}
            </ol>
        );
    }
}



