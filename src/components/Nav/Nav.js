import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
//  login/out
import { FaRegUserCircle } from 'react-icons/fa';
// operational
import { BsFillGearFill } from 'react-icons/bs';
// anyitcal
import { DiGoogleAnalytics } from 'react-icons/di';
// strategic
import { SiMicrostrategy } from 'react-icons/si';
// imperator
import { AiOutlineTable } from 'react-icons/ai';
//logout
//drawer open
import { BiRightArrow } from 'react-icons/bi';
//drawer close
import { BiLeftArrow } from 'react-icons/bi';

import { AiOutlineLogout } from 'react-icons/ai';

const Nav = (props) => {
  const user = useSelector((redux) => redux.user);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false); // used for the drawer opening and closing

  let loginLinkData = {
    path: '/login',
    text: 'Login',
  };

  if (user._id != null) {
    loginLinkData.path = '/operational';
    loginLinkData.text = 'Operational';
  }

  return (
    <div className='root'>
      <nav className='nav-menu'>
        {/* <div className='arrowContainer'> */}
        {/* {open ? (
          <BiLeftArrow className='arrow' onClick={() => setOpen(!open)} />
        ) : (
          <BiRightArrow className='arrow' onClick={() => setOpen(!open)} />
        )} */}
        {/* </div> */}
        <div>
          <img src='../img/logo.svg' alt='logo' className='nav-logo'></img>
        </div>
        <div className='nav-right'>
          {user._id ? null : (
            <Link className='nav-link' to={loginLinkData.path}>
              {loginLinkData.text}
            </Link>
          )}
          {/* Show the link to the info page and the logout button if the user is logged in */}
          {user._id && (
            <>
              <div>
                <Link className='nav-link' to='/operational'>
                  <BsFillGearFill />
                  <span className='icon-btn'>Operational</span>
                </Link>
              </div>
              <div>
                <Link className='nav-link' to='/imperator'>
                  <AiOutlineTable />
                  <span className='icon-btn'>Imperator</span>
                </Link>
              </div>
              <div>
                <Link className='nav-link' to='/strategic'>
                  <SiMicrostrategy />
                  <span className='icon-btn'>Strategic</span>
                </Link>
              </div>
              <div>
                <Link className='nav-link' to='/analytical'>
                  <DiGoogleAnalytics />
                  <span className='icon-btn'>Analytical</span>
                </Link>
              </div>
              <div>
                <Link
                  className='nav-link'
                  onClick={() => dispatch({ type: 'LOGOUT' })}
                >
                  <AiOutlineLogout />
                  <span className='icon-btn'>Log Out</span>
                </Link>
              </div>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
