import { createStore, combineReducers } from 'redux'
import todos from './todos'
import filter from './filter'

const rootReducer = combineReducers({
  [todos.namespace]: todos.reducer,
  [filter.namespace]: filter.reducer,
})

const store = createStore(rootReducer)

export default store
