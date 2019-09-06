import { createStore, combineReducers } from 'redux'
import todos from './todos'

const rootReducer = combineReducers({
  [todos.namespace]: todos.reducer,
})

const store = createStore(rootReducer)

export default store
