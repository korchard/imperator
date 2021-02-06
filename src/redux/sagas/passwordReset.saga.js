import axios from 'axios';
import { takeEvery } from 'redux-saga/effects';

// POST ROUTE - to send an email to admin via nodemailer
function* resetPassword (action) {
    try {
      yield axios.post('api/reset', action.payload);
    } catch (error) {
      console.log('Error in index password reset:', error);
    }
} // end sendMessage

function* passwordResetSaga() {
  yield takeEvery('RESET_PASSWORD', resetPassword);
}

export default passwordResetSaga;