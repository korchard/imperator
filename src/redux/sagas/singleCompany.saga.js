import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchCompanySearch(param){
  try {
    const response = yield axios.get(`/api/imperator/search/:${param}`);
    yield put({ type: 'SET_SEARCH', payload: response.data });
    console.log(response.data);
  } catch (error) {
    console.log(`Error in saga getting imperator data:`, error);
  }
}

function* imperatorSaga() {
  yield takeEvery('FETCH_IMPERATOR', fetchImperatorData);
  yield takeEvery('FETCH_COMPANY_SEARCH', fetchCompanySearch);
}

export default imperatorSaga;