import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
<<<<<<< HEAD
import operationalSaga from './operational';
=======
import operationalSaga from './operational.saga';
>>>>>>> 4751500bd7a796f1cfaa0a719cda8ac0b3f46110

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(), 
    userSaga(),
    operationalSaga()
  ]);
}
