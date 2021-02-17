import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// GET ROUTE - grabs data for the imperator table
function* fetchImperatorData() {
  try {
    const response = yield axios.get(`/api/imperator`);
    yield put({ type: 'SET_IMPERATOR', payload: response.data });
    console.log(response.data);
  } catch (error) {
    console.log('Error with fetchImperatorData in imperator.saga', error);
  }
} //end fetchImperatorData

// GET ROUTE - grabs companies that are similar to search input - fuzzy search
function* fetchCompanySearch(action) {
  try {
    const response = yield axios.get(`/api/imperator/search/${action.payload}`);
    yield put({ type: 'SET_IMPERATOR', payload: response.data });
    console.log(response.data);
  } catch (error) {
    console.log('Error with fetchCompanySearch in imperator.saga', error);
  }
}

function* imperatorSaga() {
  yield takeEvery('FETCH_IMPERATOR', fetchImperatorData);
  yield takeEvery('FETCH_COMPANY_SEARCH', fetchCompanySearch);
}

export default imperatorSaga;
