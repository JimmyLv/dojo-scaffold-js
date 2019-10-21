import { call, put, takeEvery } from '@redux-saga/core/effects'
import { createSelector } from 'reselect'
import * as TodoApi from '../apis/todos'

export const NAME = 'todos'
export const types = {
  FETCH: `${NAME}/FETCH_TODOS`,
  UPDATE: `${NAME}/UPDATE_TODOS`,
  ADD: `${NAME}/ADD_TODO`,
  TOGGLE: `${NAME}/TOGGLE_TODO`,
  REMOVE: `${NAME}/REMOVE_TODO`,
}

let nextId = 3

const getVisibilityFilter = state => state.filter
const getTodos = state => state.todos

export const selectors = {
  getVisibleTodos: createSelector(
    [getVisibilityFilter, getTodos],
    (status = 'All', todos) => {
      switch (status) {
        case 'All':
          return todos
        case 'Completed':
          return todos.filter(t => t.completed)
        case 'Active':
          return todos.filter(t => !t.completed)
        default:
          throw new Error('Unknown filter: ' + status)
      }
    }
  ),
}

export const actions = {
  addTodo: text => ({
    type: types.ADD,
    payload: {
      id: nextId++,
      text,
    },
  }),
  toggle: id => ({
    type: types.TOGGLE,
    payload: { id },
  }),
  remove: id => ({
    type: types.REMOVE,
    payload: { id },
  }),
  fetchTodos: () => ({
    type: types.FETCH,
  }),
  updateTodos: todos => ({
    type: types.UPDATE,
    payload: { todos },
  }),
}

export function* sagas() {
  function* fetchPosts(pagination) {
    try {
      const todos = yield call(TodoApi.query, pagination)
      yield put(actions.updateTodos(todos))
    } catch (error) {
      yield put({ type: 'FETCH_ERROR', error })
    }
  }
  yield takeEvery(types.FETCH, fetchPosts)
}

export default function reducer(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case types.UPDATE:
      return [...state, ...payload.todos]
    case types.ADD:
      return [
        ...state,
        {
          id: payload.id,
          text: payload.text,
          completed: false,
        },
      ]
    case types.TOGGLE:
      return state.map(todo =>
        todo.id === payload.id ? { ...todo, completed: !todo.completed } : todo
      )
    case types.REMOVE:
      return state.filter(todo => todo.id !== payload.id)
    default:
      return state
  }
}
