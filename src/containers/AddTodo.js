import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ state,dispatch }) => {
    let input;
    return (
        <div>
            <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value));
        //console.log(state);

        input.value = ''
      }}>
                <input placeholder="введите строку" ref={node => {
          input = node
        }} />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
};
const mapStateToProps = (state) => {
    return {
        state: state
    }
};

AddTodo = connect(mapStateToProps)(AddTodo);

export default AddTodo