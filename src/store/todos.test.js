import reducer, * as actions from './todos'

describe('todos reducers', () => {
  it('should dispatch action when add todo', () => {
    const action = actions.addTodo('new todo.')

    expect(action).toEqual({
      type: actions.type.ADD,
      id: 0,
      text: 'new todo.'
    })
  })
  it('should add todo in store state', () => {
    const action = {
      type: actions.type.ADD,
      id: 1,
      text: 'new todo.',
    }
    const result = reducer([], action)
    expect(result).toEqual([
      { id: 1, text: 'new todo.', completed: false },
    ])
  })
})
