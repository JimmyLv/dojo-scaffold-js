import { createSelector } from 'reselect'

export const NAME = 'todos'
export const types = {
  FETCH: `${NAME}/FETCH_TODOS`,
  ADD: `${NAME}/ADD_TODO`,
  TOGGLE: `${NAME}/TOGGLE_TODO`,
  REMOVE: `${NAME}/REMOVE_TODO`,
}

let nextId = 3

const getVisibilityFilter = state => state.filter
const getTodos = state => state.todos

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (status = 'All', todos) => {
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
)

export const actions = {
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
  fetchTodos() {
    return async dispatch => {
      const response = await fetch('/api/todos')
      const todos = await response.json()
      return dispatch({
        type: types.FETCH,
        payload: { todos },
      })
    }
  },
}

export default function reducer(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case types.FETCH:
      console.log('response', payload)
      return [...state, ...payload.todos]
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
        todo.id === payload.id ? { ...todo, completed: !todo.completed } : todo
      )
    case types.REMOVE:
      return state.filter(todo => todo.id !== payload.id)
    default:
      return state
  }
}
