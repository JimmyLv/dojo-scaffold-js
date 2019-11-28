// @ts-nocheck
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas'
import filterReducer, * as filter from './filter'
import todosReducer, * as todos from './todo'

const rootReducer = combineReducers({
  [todos.NAME]: todosReducer,
  [filter.NAME]: filterReducer,
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, thunkMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store
