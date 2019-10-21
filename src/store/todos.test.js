import reducer, { actions } from './todos'

describe('todos reducers', () => {
  it.skip('should fetch all todos from api', () => {
    fetch.mockResponse(
      JSON.stringify([{ id: 0, text: 'new todo.', completed: false }])
    )

    const result = reducer([], actions.fetchTodos())

    expect(result).toBe([{ id: 0, text: 'new todo.', completed: false }])
  })
  it('should add todo in store state', () => {
    const result = reducer([], actions.addTodo('new todo.'))

    expect(result).toEqual([{ id: 3, text: 'new todo.', completed: false }])
  })
  it('should toggle todo status in store state', () => {
    const state = [
      {
        id: 1,
        text: 'new todo.',
        completed: false,
      },
    ]

    const result = reducer(state, actions.toggle(1))

    expect(result).toEqual([{ id: 1, text: 'new todo.', completed: true }])
  })
  it('should remove todo in store state', () => {
    const state = [
      {
        id: 1,
        text: 'new todo.',
        completed: true,
      },
      {
        id: 2,
        text: 'another new todo.',
        completed: false,
      },
    ]

    const result = reducer(state, actions.remove(2))

    expect(result).toEqual([{ id: 1, text: 'new todo.', completed: true }])
  })
})
