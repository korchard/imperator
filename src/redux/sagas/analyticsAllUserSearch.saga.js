import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

// GET ROUTE - grabs user email input in user search
function* fetchUserByEmail(action) {
    try {
      const response = yield axios.get(`/api/analytics/all/${action.payload}`);
      yield put({ type: 'SET_AURELIUS_USERS_SEARCH', payload: response.data })
    } catch (error) {
      console.log('Error with fetchUserByEmail in analyticalUserSearch.saga', error);
    }
} 

// PUT ROUTE - updates user email address
function* editUserEmail(action) {
  try {
    yield axios.put(`/api/analytics/all/`, action.payload);
    yield put({ type: 'FETCH_AURELIUS_USER', payload: action.payload.search })
  } catch (error) {
    console.log('Error with editUserEmail in analyticalUserSearch.saga', error);
  }
}

function* analyticalUserSearchSaga() {
  yield takeEvery('FETCH_AURELIUS_USER', fetchUserByEmail);
  yield takeEvery('EDIT_USER_EMAIL', editUserEmail);
}

export default analyticalUserSearchSaga;