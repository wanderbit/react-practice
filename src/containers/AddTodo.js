import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ state,dispatch }) => {

    let inputtr;
    return (
        <div>
            <form onSubmit={e => {
        e.preventDefault();
        if (!inputtr.value.trim()) {
          return
        }
        dispatch(addTodo(inputtr.value));
        //console.log(state);

        inputtr.value = ''
      }}>
                <input placeholder="введите строку" ref={node => {
          inputtr = node
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
        state: state,
        testprop: 'test'
    }
};

AddTodo = connect(mapStateToProps)(AddTodo);

export default AddTodo