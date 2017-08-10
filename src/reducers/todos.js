const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          liked: false
        }
      ];

    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      );

    case 'LIKE_TODO':
      return state.map(todo =>
          (todo.id === action.id)
              ? {...todo, liked: !todo.liked}
              : todo
      );

    case 'DELETE_TODO':
        console.log(state);
      const filteredTodos = state.filter(function(element){
        console.log(element.id,action.id);
        if(element.id !== action.id){
            return true;

        }
      });
      console.log(filteredTodos);

     // return state;

     /* todo => todo.id !== action.id*/
    return Object.assign([], filteredTodos);


    default:
      return state
  }
};

export default todos
