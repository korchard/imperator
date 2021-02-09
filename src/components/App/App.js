import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect, useDispatch } from 'react-redux';
import Nav from '../Nav/Nav';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import Operational from '../Operational/Operational.js';
import Analytical from '../Analytical/Analytical.js';
import Imperator from '../Imperator/Imperator.js';
import Strategic from '../Strategic/Strategic.js';
import PasswordReset from '../PasswordReset/PasswordReset.tsx';

import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, []);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from='/' to='/operational' />

          {/* Visiting localhost:3000/about will show the about page. */}

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path='/operational'
            component={Operational}
          />

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path='/imperator'
            component={Imperator}
          />

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path='/strategic'
            component={Strategic}
          />

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path='/analytical/:type/:id'
            component={Analytical}
          />

          <Route exact path='/passwordReset' component={PasswordReset} />

          {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows LoginPage at /login
            exact
            path='/login'
            component={LoginPage}
            authRedirect='/operational'
          />
          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows RegisterPage at "/registration"
            exact
            path='/registration'
            component={RegisterPage}
            authRedirect='/operational'
          />

          {/* If none of the other routes matched, we will show a 404. */}
          <Route render={() => <h1>404</h1>} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default connect()(App);
