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
  it('should toggle todo status in store state', () => {
    const action = {
      type: types.TOGGLE,
      id: 1,
    }
    const state = [{
      id: 1,
      text: 'new todo.',
      completed: false,
    }]

    const result = todos.reducer(state, action)

    expect(result).toEqual([
      { id: 1, text: 'new todo.', completed: true },
    ])
  })
})
