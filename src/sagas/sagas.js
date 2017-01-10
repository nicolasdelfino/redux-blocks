import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

// worker
export function* fetchUsers () {
  try {
    // call the api
    console.log('saga attempting to fetch albums from the api')
    const response = yield call(axios.get, 'http://jsonplaceholder.typicode.com/albums')
    console.log(response)

    yield put({ type: 'SAGA_FETCH_ALBUMS_FULLFILLED', payload: response.data })
  } catch (e) {
    // error
  }
}

// watcher
export function* watchFetchUsers () {
  console.log('saga listening to SAGA_FETCH_ALBUMS')
  yield takeEvery('SAGA_FETCH_ALBUMS', fetchUsers)
}

// root
export default function* rootSaga () {
  yield [
    watchFetchUsers()
  ]
}
