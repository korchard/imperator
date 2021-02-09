import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getSingleCompanyData(action){
  try {
    const response = yield axios.get(`/api/analytics/${action.param.id}`);
    yield put({ type: 'SET_SINGLE_COMPANY_DATA', payload: response.data });
  } catch (error) {
    console.log(`Error in saga getting imperator data:`, error);
  }
}

function* imperatorSaga() {
  yield takeEvery('FETCH_SINGLE_COMPANY_DATA', getSingleCompanyData);
}

export default imperatorSaga;