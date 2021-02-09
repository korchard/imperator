import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

//Strategic Graph for average plan length by types
function* getPlanAverage() {
  try {
    const response = yield axios.get(`/api/strategic`);
    yield put({ type: 'SET_PLAN_LENGTH_AVERAGE', payload: response.data });
  } catch (error) {
    console.log('error with getPlanAverage in strategic.saga', error);
  }
} //end getPlanAverage

//Strategic Graph for average plan length by types
function* getPaidPlans() {
  try {
    const response = yield axios.get(`/api/strategic/paid`);
    console.log('response.data', response.data)
    yield put({ type: 'SET_PAID_PLANS', payload: response.data });
  } catch (error) {
    console.log('error with getPaidPlans in strategic.saga', error);
  }
} //end getPaidPlans

function* strategicSaga() {
  yield takeEvery('GET_PLAN_LENGTH_AVERAGE', getPlanAverage);
  yield takeEvery('GET_PAID_PLANS', getPaidPlans);
}

export default strategicSaga;