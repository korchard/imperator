import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// GET ROUTE - grabs a specific company's information and calls user get route
function* getSingleCompanyData(action){
  try {
    const response = yield axios.get(`/api/analytics/${action.param.id}`);
    yield put({ type: 'FETCH_SINGLE_COMPANY_USERS', param: {id: action.param.id }});
    yield put({ type: 'SET_SINGLE_COMPANY_DATA', payload: response.data });
  } catch (error) {
    console.log('Error with getSingleCompanyData in singleCompany.saga', error);
  }
} 

// PUT ROUTE - changes the customer billing id
function* editCustomerId(action){
  try{
    yield axios.put(`/api/analytics/${action.payload.companyId}`, action.payload) 
    yield put({ type: 'FETCH_SINGLE_COMPANY_DATA', param: {id: action.payload.companyId}})
  }catch (error) {
    console.log('Error with editCustomerId in singleCompany.saga', error);
  }
} 

// GET ROUTE - grabs all users for a specific company
function* fetchCompanyUsers(action){
  try {
    const response = yield axios.get(`/api/analytics/users/${action.param.id}`);
    yield put({ type: 'SET_SINGLE_COMPANY_USERS', payload: response.data });
  } catch (error) {
    console.log('Error with fetchCompanyUsers in singleCompany.saga', error);
  }
} 

function* singleCompanySaga() {
  yield takeEvery('FETCH_SINGLE_COMPANY_DATA', getSingleCompanyData);
  yield takeEvery('EDIT_CUSTOMER_ID', editCustomerId)
  yield takeEvery('FETCH_SINGLE_COMPANY_USERS', fetchCompanyUsers);
}

export default singleCompanySaga;