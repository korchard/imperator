import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getSingleCompanyData(action){
  try {
    const response = yield axios.get(`/api/analytics/${action.param.id}`);
    yield put({ type: 'SET_SINGLE_COMPANY_DATA', payload: response.data });
  } catch (error) {
    console.log(`Error in saga getting analytical data:`, error);
  }
}

function* fetchCompanyUsers(action){
  try {
    const response = yield axios.get(`/api/analytics/users/${action.param.id}`);
    yield put({ type: 'SET_SINGLE_COMPANY_USERS', payload: response.data });
  } catch (error) {
    console.log(`Error in saga getting company users:`, error);
  }
}

function* singleCompanySaga() {
  yield takeEvery('FETCH_SINGLE_COMPANY_DATA', getSingleCompanyData);
  yield takeEvery('FETCH_COMPANY_USERS', fetchCompanyUsers);
}

export default singleCompanySaga;