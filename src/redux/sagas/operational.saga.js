import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

/**
 * Will be fired on "REGISTER" action
 * @param {Object} action Action payload that holds the username password for a new user
 * It will then log them in after if no errors, then sets it to redux state to allow the component to show
 * */

function* getUsersByMonth(action) {
  try {
    const yield get({ type: 'CLEAR_REGISTRATION_ERROR' });

    yield put({ type: 'SET_TO_LOGIN_MODE' });
  } catch (error) {
    console.log('Error with user registration:', error);
    yield put({ type: 'REGISTRATION_FAILED' });
  }
}

function* operationalSaga() {
  yield takeLatest('GET_USERS_BY_MONTH', operationsSaga);
}

export default operationalSaga;
