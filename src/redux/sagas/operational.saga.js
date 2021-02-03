import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchTotalCounts() {
    try {
        const response = yield axios.get(`/api/planCount`)
        yield put({ type: 'SET_PLAN_COUNT', payload: response.data });
        console.log(response.data);
    } catch (error) {
        console.log('error with plan count get in planCount.saga', error);
    }
}//end fetchTotalCounts

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
  yield takeEvery('GET_USERS_BY_MONTH', operationsSaga);
  yield takeEvery('FETCH_PLAN_COUNTS', fetchTotalCounts);
}

export default operationalSaga;
