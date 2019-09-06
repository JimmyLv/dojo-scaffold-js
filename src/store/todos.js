// Actions
export const NAME = 'todos'
export const types = {
  ADD: `${NAME}/ADD_TODO`,
}

let nextId = 0

export default {
  namespace: NAME,
  actions: {
    addTodo: text => ({
      type: types.ADD,
      id: nextId++,
      text,
    })
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
      default:
        return state
    }
  },
  selectors: {
    getAll: state => state[NAME]
  }
}
