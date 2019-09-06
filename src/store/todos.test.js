import todos, { addTodo } from './todos'

describe('todos reducers', () => {
  it('should dispatch action when add todo', () => {
    const action = addTodo('new todo.')

    expect(action).toEqual({
      type: 'todos/ADD_TODO',
      id: 0,
      text: 'new todo.'
    })
  })
  it('should add todo in store state', () => {
    const action = {
      type: 'todos/ADD_TODO',
      id: 1,
      text: 'new todo.',
    }
    const result = todos([], action)
    expect(result).toEqual([
      { id: 1, text: 'new todo.', completed: false },
    ])
  })
})
