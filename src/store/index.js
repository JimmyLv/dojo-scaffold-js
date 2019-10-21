import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import filterReducer, * as filter from './filter'
import todosReducer, * as todos from './todos'

const rootReducer = combineReducers({
  [todos.NAME]: todosReducer,
  [filter.NAME]: filterReducer,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default store
