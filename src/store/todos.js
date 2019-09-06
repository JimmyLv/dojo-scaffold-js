// import { createSelector } from 'reselect'

export const NAME = 'todos'
export const types = {
  ADD: `${NAME}/ADD_TODO`,
  TOGGLE: `${NAME}/TOGGLE_TODO`,
  REMOVE: `${NAME}/REMOVE_TODO`,
}

let nextId = 0

export const getVisibleTodos = (status = 'All', todos) => {
  switch (status) {
    case 'All':
      return todos
    case 'Completed':
      return todos.filter(t => t.completed)
    case 'Active':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + status)
  }
}

export default {
  namespace: NAME,
  actions: {
    addTodo: text => ({
      type: types.ADD,
      payload: {
        id: nextId++,
        text,
      },
    }),
    toggle: id => ({
      type: types.TOGGLE,
      payload: { id },
    }),
    remove: id => ({
      type: types.REMOVE,
      payload: { id },
    }),
  },
  reducer(state = [], action) {
    const { type, payload } = action
    switch (type) {
      case types.ADD:
        return [
          ...state,
          {
            id: payload.id,
            text: payload.text,
            completed: false,
          },
        ]
      case types.TOGGLE:
        return state.map(todo =>
          todo.id === payload.id
            ? { ...todo, completed: !todo.completed }
            : todo,
        )
      case types.REMOVE:
        return state.filter(todo => todo.id !== payload.id)
      default:
        return state
    }
  },
}
