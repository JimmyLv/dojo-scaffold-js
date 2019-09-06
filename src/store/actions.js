export const actions = {
  add: () => state => {
    if (state.input === '') return

    return {
      input: '',
      todos: state.todos.concat({
        done: false,
        value: state.input,
        id: state.todos.length + 1,
      }),
    }
  },
  // ...
  // toggle, input, filter action functions
}
