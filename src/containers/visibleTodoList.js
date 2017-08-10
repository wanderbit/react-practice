import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/todolist/TodoList'

/*const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}*/

const mapStateToProps = (state) => ({
    todos: state.todos,
})


const VisibleTodoList = connect(
    mapStateToProps
)(TodoList)

export default VisibleTodoList