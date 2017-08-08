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
      ]

    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )

    case 'LIKE_TODO':
      return state.map(todo =>
          (todo.id === action.id)
              ? {...todo, liked: !todo.liked}
              : todo
      )

    default:
      return state
  }
};

export default todos
