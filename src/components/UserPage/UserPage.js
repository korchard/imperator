import React from 'react';
import { useSelector } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

const UserPage = () => {
  const user = useSelector((store) => store.user);
  return (
    <div>
      <h1 id='welcome'>Welcome, {user.username}!</h1>
      <p>Your ID is: {user._id}</p>
      <LogOutButton className='log-in' />
    </div>
  );
};

export default UserPage;
