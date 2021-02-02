import React from 'react';
import { useDispatch } from 'react-redux';

const LogOutButton: React.FC = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch({ type: 'LOGOUT' })}>Log Out</button>;
};

export default LogOutButton;
