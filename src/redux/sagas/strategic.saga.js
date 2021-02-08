import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

//Strategic Graph for average plan length by types
function* getPlanAverage() {
  try {
    const response = yield axios.get(`/api/strategic`);
    yield put({ type: 'SET_PLAN_COUNT', payload: response.data });
  } catch (error) {
    console.log('error with getPlanAverage in strategic.saga', error);
  }
} //end getPlanAverage


function* operationalSaga() {
  yield takeEvery('GET_PLAN_LENGTH_AVERAGE', getPlanAverage);

}

export default operationalSaga;