import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// GET ROUTE - graph for total plan count
function* fetchTotalCounts() {
  try {
    const response = yield axios.get(`/api/planCount`);
    yield put({ type: 'SET_PLAN_COUNT', payload: response.data });
    console.log('plan index', response.data);
  } catch (error) {
    console.log('Error with fetchTotalCounts in operational.saga', error);
  }
} 

// GET ROUTE - graph for total actions
function* fetchTotalActions() {
  try {
    const response = yield axios.get(`/api/data/totalactions`);
    yield put({ type: 'SET_TOTAL_ACTIONS', payload: response.data });
  } catch (error) {
    console.log('Error with fetchTotalActions in operational.saga', error);
  }
} //end fetchTotalCounts

// GET ROUTE - graph for users added monthly
function* getUsersByMonth(action) {
  try {
    const response = yield axios.get(
      `/api/userOverTime/${action.payload.year}`
    );
    yield put({ type: 'SET_MONTHLY_USERS', payload: response.data });
    console.log(response.data);
  } catch (error) {
    console.log('Error with getUsersByMonth in operational.saga', error);
  }
}

function* operationalSaga() {
  yield takeEvery('GET_USERS_BY_MONTH', getUsersByMonth);
  yield takeEvery('FETCH_PLAN_COUNTS', fetchTotalCounts);
  yield takeEvery('FETCH_TOTAL_ACTIONS', fetchTotalActions);
}

export default operationalSaga;
