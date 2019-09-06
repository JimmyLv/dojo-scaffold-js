import todos, { types } from './todos'

describe('todos reducers', () => {
  it('should dispatch action when add todo', () => {
    const action = todos.actions.addTodo('new todo.')

    expect(action).toEqual({
      type: types.ADD,
      id: 0,
      text: 'new todo.',
    })
  })
  it('should add todo in store state', () => {
    const action = {
      type: types.ADD,
      id: 1,
      text: 'new todo.',
    }
    const result = todos.reducer([], action)
    expect(result).toEqual([
      { id: 1, text: 'new todo.', completed: false },
    ])
  })
})
