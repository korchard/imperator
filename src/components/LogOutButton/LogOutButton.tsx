import React from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineLogout } from 'react-icons/ai';

type Props = {
  className?: string | undefined;
  id?: string | undefined;
};

const LogOutButton: React.FC<Props> = () => {
  const dispatch = useDispatch();
  return (
      <button className='nav-link' 
              id='logoutBtn' 
              onClick={() => dispatch({ type: 'LOGOUT' })}>
              <AiOutlineLogout className="logoutIcon"/>
                Log Out
      </button>
  )
};

export default LogOutButton;
