import axios from 'axios';
import { takeEvery } from 'redux-saga/effects';

// POST ROUTE - to reset password 
function* resetPassword(action) {
    try {
      yield axios.post('api/reset', action.payload);
    } catch (error) {
      console.log('Error in index password reset:', error);
    }
} // end resetPassword

function* passwordResetSaga() {
  yield takeEvery('RESET_PASSWORD', resetPassword);
}

export default passwordResetSaga;