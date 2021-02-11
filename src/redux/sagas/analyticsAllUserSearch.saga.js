import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';


function* fetchUserByEmail(action) {
    try {
      const response = yield axios.get(`/api/analytics/all/${action.payload}`);
      yield put({ type: 'SET_AURELIUS_USERS_SEARCH', payload: response.data })
    } catch (error) {
      console.log('Error in analytical user search', error);
    }
} 

function* editUserEmail(action) {
  try {
    yield axios.put(`/api/analytics/all/`, action.payload);
    yield put({ type: 'FETCH_AURELIUS_USER' })
  } catch (error) {
    console.log('Error in edit user email saga (analyticalAllUserSearch saga)', error)
  }
}

function* analyticalUserSearchSaga() {
  yield takeEvery('FETCH_AURELIUS_USER', fetchUserByEmail);
  yield takeEvery('EDIT_USER_EMAIL', editUserEmail);
}

export default analyticalUserSearchSaga;