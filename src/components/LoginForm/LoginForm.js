import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const LoginForm = () => {
  const [user, setUser] = useState({ username: '', password: '' });
  const dispatch = useDispatch();
  const errors = useSelector((redux) => redux.errors);

  const login = (event) => {
    event.preventDefault();
    const { username, password } = user;
    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username,
          password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  const handleInputChangeFor = (propertyName) => (event) => {
    setUser({
      ...user,
      [propertyName]: event.target.value,
    });
  };

  return (
    <form className='formPanel' onSubmit={login}>
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
            type='text'
            name='username'
            required
            value={user.username}
            onChange={handleInputChangeFor('username')}
          />
        </label>
      </div>
      <div>
        <label htmlFor='password'>
          Password:
          <input
            type='password'
            name='password'
            required
            value={user.password}
            onChange={handleInputChangeFor('password')}
          />
        </label>
      </div>
      <div>
        <input className='btn' type='submit' name='submit' value='Log In' />
      </div>
    </form>
  );
};

export default LoginForm;
