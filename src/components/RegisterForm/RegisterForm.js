import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './RegisterForm.css';

const RegisterForm = () => {
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  const initState = {
    username: '',
    password: '',
  };
  const [newUser, setNewUser] = useState(initState);

  const registerUser = (event) => {
    event.preventDefault();
    const { username, password } = newUser;
    if (username && password) {
      dispatch({
        type: 'REGISTER',
        payload: {
          username,
          password,
        },
      });
    }
  };

  return (
    <div className='register'>
      <form className='formPanel' onSubmit={registerUser}>
        <img src='../img/logo.svg' alt='logo' className='nav-logo2'></img>
        <h2>Register</h2>
        {errors.registrationMessage && (
          <h3 className='alert' role='alert'>
            {errors.registrationMessage}
          </h3>
        )}
      <div>
        <label htmlFor='username'>
          Username:
          <input
            type='text'
            name='username'
            className='registerForm'
            value={newUser.username}
            required
            onChange={(e) =>
              setNewUser({ ...newUser, username: e.target.value })
            }
          />
        </label>
      </div>
      <div>
        <label htmlFor='password'>
          Password:
          <input
            type='password'
            name='password'
            className='registerForm'
            value={newUser.password}
            required
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
          />
        </label>
      </div>
      <div>
          <Link
            className="linkBtnLogin"
            to='/login'>
              Login
          </Link>
        </div>
      <div>
        <input className='btn' type='submit' name='submit' value='Register' />
      </div>
    </form>
    </div>
  );
};

export default RegisterForm;
