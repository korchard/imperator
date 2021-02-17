import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import './LoginForm.css';

type Props = {
  className?: string | undefined;
};

interface IUser {
  username: string;
  password: string;
}

interface IError {
  errors: {
    loginMessage: string;
    registrationMessage: string;
  };
}

const LoginForm: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState<IUser>({ username: '', password: '' });
  const errors = useSelector((redux: IError) => redux.errors);
  const history = useHistory();

  const login = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log('user', user);
    const { username, password } = user;
    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: user.username,
          password: user.password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <div className='login'>
      <form className='formPanel' onSubmit={login}>
        <img src='../img/logo.svg' alt='logo' className='nav-logo2'></img>
        <h2>Login</h2>
        {errors.loginMessage && (
          <h3 className='alert' role='alert'>
            {errors.loginMessage}
          </h3>
        )}
        <div>
          <label htmlFor='username'>
            Username:
            <input
              className='loginForm'
              type='text'
              name='username'
              required
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </label>
        </div>
        <div>
          <label htmlFor='password'>
            Password:
            <input
              className='loginForm'
              type='password'
              name='password'
              required
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </label>
        </div>
        <div>
          <Link className='linkBtn' to='/passwordReset'>
            Forgot Password?
          </Link>
          <Link
              className="linkBtnReg"
              to='/registration'>
                Register
          </Link>
        </div>
        <div>
          <button className='btn' type='submit' name='submit' value='Log In'>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
