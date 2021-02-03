import React from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineLogout } from 'react-icons/ai';

const LogOutButton: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <div className='logoutContainer'>
      <AiOutlineLogout className='icon-btn' />
      <button
        className='nav-link'
        id='logoutBtn'
        onClick={() => dispatch({ type: 'LOGOUT' })}
      >
        Log Out
      </button>
    </div>
  );
};

export default LogOutButton;
