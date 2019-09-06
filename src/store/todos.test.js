import todos from './todos'

describe('todos reducers', () => {
  it('should add todo', () => {
    const action = {
      type: 'ADD_TODO',
      id: 1,
      text: 'new todo.',
    }
    const result = todos([], action)
    expect(result).toEqual([
      { id: 1, text: 'new todo.', completed: false },
    ])
  })
})
