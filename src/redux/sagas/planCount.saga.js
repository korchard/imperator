import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import planCount from '../reducers/planCount.reducer';

function* planCountSaga() {
    yield takeLatest('FETCH_PLAN_COUNTS', fetchTotalCounts);
}

function* fetchTotalCounts() {
    try {
        const response = yield axios.get(`api/planCount`)
        yield put({ type: 'SET_PLAN_COUNT', payload: response.data });
        console.log(response.data);
    } catch (error) {
        console.log('error with plan count get in planCount.saga', error);
    }
}//end fetchTotalCounts


export default planCountSaga;