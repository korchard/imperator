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

function* editCustomerId(action){
  try{
    yield axios.put(`/api/analytical/${action.param}`, action.payload)  
    yield put({ type: 'FETCH_SINGLE_COMPANY_DATA', payload: action.param})
  }catch (error) {
    console.log('Error in edit CID (singleCompanySaga)', error)
  }
}

function* imperatorSaga() {
  yield takeEvery('FETCH_SINGLE_COMPANY_DATA', getSingleCompanyData);
  yield takeEvery('EDIT_CUSTOMER_ID', editCustomerId)
}

export default imperatorSaga;