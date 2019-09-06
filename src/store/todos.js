// Actions
const ADD = 'todos/ADD_TODO'

// Action Creators
let nextId = 0
export const addTodo = text => ({
  type: ADD,
  id: nextId++,
  text,
})

// Reducers
export default function todos(state = [], action) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ]
    default:
      return state
  }
}
