import { all } from '@redux-saga/core/effects'
import { sagas as todoSaga } from './todo'

export default function* rootSaga() {
  yield all([todoSaga()])
  // code after all-effect
}
