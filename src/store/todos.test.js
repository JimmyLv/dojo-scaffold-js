import reducer, { types } from './todos'

describe('todos reducers', () => {
  it('should add todo in store state', () => {
    const action = {
      type: types.ADD,
      payload: {
        id: 1,
        text: 'new todo.',
      },
    }

    const result = reducer([], action)

    expect(result).toEqual([
      { id: 1, text: 'new todo.', completed: false },
    ])
  })
  it('should toggle todo status in store state', () => {
    const action = {
      type: types.TOGGLE,
      payload: { id: 1 },
    }
    const state = [{
      id: 1,
      text: 'new todo.',
      completed: false,
    }]

    const result = reducer(state, action)

    expect(result).toEqual([
      { id: 1, text: 'new todo.', completed: true },
    ])
  })
  it('should remove todo in store state', () => {
    const action = {
      type: types.REMOVE,
      payload: { id: 2 },
    }
    const state = [
      {
        id: 1,
        text: 'new todo.',
        completed: true,
      }, {
        id: 2,
        text: 'another new todo.',
        completed: false,
      },
    ]

    const result = reducer(state, action)

    expect(result).toEqual([
      { id: 1, text: 'new todo.', completed: true },
    ])
  })
})
