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

//Get all paid plans expiring this month
function* getPaidPlans() {
  try {
    const response = yield axios.get(`/api/strategic/paid`);
    yield put({ type: 'SET_PAID_PLANS', payload: response.data });
  } catch (error) {
    console.log('error with getPaidPlans in strategic.saga', error);
  }
} //end getPaidPlans

//Get all trial plans expiring this month
function* getTrialPlans() {
  try {
    const response = yield axios.get(`/api/strategic/trial`);
    yield put({ type: 'SET_TRIAL_PLANS', payload: response.data });
  } catch (error) {
    console.log('error with getTrialPlans in strategic.saga', error);
  }
} //end getTrialPlans

// POST ROUTE - to email client from strategic plan
function* sendEmail(action) {
  try {
    yield axios.post('api/email', action.payload);
  } catch (error) {
    console.log('Error in sendEmail saga:', error);
  }
} // end resetPassword

function* strategicSaga() {
  yield takeEvery('GET_PLAN_LENGTH_AVERAGE', getPlanAverage);
  yield takeEvery('GET_PAID_PLANS', getPaidPlans);
  yield takeEvery('GET_TRIAL_PLANS', getTrialPlans);
  yield takeEvery('SEND_EMAIL', sendEmail)
}

export default strategicSaga;