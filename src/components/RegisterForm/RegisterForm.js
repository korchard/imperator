import React, { useState } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';

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
    <form className='formPanel' onSubmit={registerUser}>
      <h2>Register User</h2>
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
            value={newUser.password}
            required
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
          />
        </label>
      </div>
      <div>
        <input className='btn' type='submit' name='submit' value='Register' />
      </div>
    </form>
  );
};

export default connect()(RegisterForm);
