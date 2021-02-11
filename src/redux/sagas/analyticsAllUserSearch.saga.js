import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

// POST ROUTE - to reset password 
function* fetchUserByEmail(action) {
    try {
      const response = yield axios.get(`/api/analytics/all/${action.payload}`);
      yield put({ type: 'SET_AURELIUS_USERS_SEARCH', payload: response.data })
    } catch (error) {
      console.log('Error in analytical user search', error);
    }
} // end resetPassword

function* analyticalUserSearchSaga() {
  yield takeEvery('FETCH_AURELIUS_USER', fetchUserByEmail);
}

export default analyticalUserSearchSaga;