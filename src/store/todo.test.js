// @ts-nocheck
import { expectSaga } from 'redux-saga-test-plan'
import * as TodoApi from '../apis/todos'
import reducer, { sagas, actions, types } from './todo'

const mockTodos = [
  {
    id: 1,
    text: 'read something',
    completed: false,
  },
  {
    id: 2,
    text: 'write something',
    completed: true,
  },
]
// jest.mock('../apis/todos', () => ({
//   query: () => mockTodos,
// }))


describe('todos reducers', () => {
  it('should add todo in store state', () => {
    const result = reducer({ list: [] }, actions.addTodo('new todo.'))

    expect(result.list).toEqual([
      { id: 3, text: 'new todo.', completed: false },
    ])
  })
  it('should toggle todo status in store state', () => {
    const state = {
      list: [
        {
          id: 1,
          text: 'new todo.',
          completed: false,
        },
      ],
    }
    const result = reducer(state, actions.toggle(1))

    expect(result.list).toEqual([{ id: 1, text: 'new todo.', completed: true }])
  })
  it('should remove todo in store state', () => {
    const state = {
      list: [
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
      ],
    }

    const result = reducer(state, actions.remove(2))

    expect(result.list).toEqual([{ id: 1, text: 'new todo.', completed: true }])
  })

  TodoApi.query = jest.fn(() => mockTodos)

  it('should fetch todos when dispatch fetchTodos action', async () => {
    await expectSaga(exam.fetchExercise)
      .withReducer(exam.reducer.setExercise)
      .hasFinalState({
        list: mockTodos,
        error: null,
      })
      // .put({ type: types.UPDATE, payload: { todos: mockTodos } })
      .put({ type: 'exam/fetchExercise' })
      // .dispatch(actions.fetchTodos())
      .run()

    expect(TodoApi.query).toBeCalled()
  })
})
