import axios from 'axios';
import { takeEvery } from 'redux-saga/effects';

// POST ROUTE - to reset password 
function* fetchUserByEmail(action) {
    try {
      yield axios.get(`/api/analytics/all/1`, action.payload);
    } catch (error) {
      console.log('Error in analytical user search', error);
    }
} // end resetPassword

function* analyticalUserSearchSaga() {
  yield takeEvery('FETCH_AURELIUS_USER', fetchUserByEmail);
}

export default analyticalUserSearchSaga;