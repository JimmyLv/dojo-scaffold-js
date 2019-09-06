import { createStore, combineReducers } from 'redux'
import todosReducer, * as todos from './todos'
import filterReducer, * as filter from './filter'

const rootReducer = combineReducers({
  [todos.NAME]: todosReducer,
  [filter.NAME]: filterReducer,
})

const store = createStore(rootReducer)

export default store
