// Actions
export const NAME = 'todos'
export const types = {
  ADD: `${NAME}/ADD_TODO`,
  TOGGLE: `${NAME}/TOGGLE_TODO`,
}

let nextId = 0

export default {
  namespace: NAME,
  actions: {
    addTodo: text => ({
      type: types.ADD,
      id: nextId++,
      text,
    }),
    toggle: id => ({
      type: types.TOGGLE,
      payload: { id },
    }),
  },
  reducer(state = [], action) {
    switch (action.type) {
      case types.ADD:
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false,
          },
        ]
      case types.TOGGLE:
        return state.map(todo =>
          todo.id === action.id
            ? { ...todo, completed: !todo.completed }
            : todo,
        )
      default:
        return state
    }
  },
  selectors: {
    getAll: state => state[NAME]
  }
}
