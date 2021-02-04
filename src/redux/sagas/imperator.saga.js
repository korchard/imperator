import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchImperatorData() {
  try {
    const response = yield axios.get(`/api/imperator`);
    yield put({ type: 'SET_IMPERATOR', payload: response.data });
    console.log(response.data);
  } catch (error) {
    console.log(`Error in saga getting imperator data:`, error);
  }
} //end fetchImperatorData

function* imperatorSaga() {
  yield takeEvery('FETCH_IMPERATOR', fetchImperatorData);
}

export default imperatorSaga;