import React from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineLogout } from 'react-icons/ai';

const LogOutButton: React.FC = () => {
  const dispatch = useDispatch();
  return (
      <button className='nav-link' id='logoutBtn' 
              onClick={() => dispatch({ type: 'LOGOUT' })}><AiOutlineLogout className="logoutIcon"/>Log Out</button>
  )
};

export default LogOutButton;
