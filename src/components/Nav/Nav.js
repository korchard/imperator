import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
//  login
import { AiOutlineLogin } from 'react-icons/ai';
// operational
import { BsFillGearFill } from 'react-icons/bs';
// anyitcal
import { DiGoogleAnalytics } from 'react-icons/di';
// strategic
import { SiMicrostrategy } from 'react-icons/si';
// imperator
import { AiOutlineTable } from 'react-icons/ai';
//logout
import { AiOutlineLogout } from 'react-icons/ai';
//drawer open
import { BiRightArrow } from 'react-icons/bi';
//drawer close
import { BiLeftArrow } from 'react-icons/bi';

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
    <div className={open ? 'nav' : 'navOpen'}>
      <div className='arrowContainer'>
        {open ? (
          <BiLeftArrow className='arrow' onClick={() => setOpen(!open)} />
        ) : (
          <BiRightArrow className='arrow' onClick={() => setOpen(!open)} />
        )}
      </div>
      <div>
        <img src='../img/logo.svg' alt='logo' className='nav-logo'></img>
      </div>
      <div className='nav-right'>
        {user._id ? null : (
          <Link className='nav-link' to={loginLinkData.path}>
            <AiOutlineLogin />
            <span className='icon-btn'>{loginLinkData.text}</span>
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
              <Link className='nav-link' to='/analytical/all/1'>
                <DiGoogleAnalytics />
                <span className='icon-btn'>Analytical</span>
              </Link>
            </div>
            <div>
              <Link className='nav-link' to='/strategic'>
                <SiMicrostrategy />
                <span className='icon-btn'>Strategic</span>
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
        {/* Always show this link since the about page is not protected */}
      </div>
    </div>
  );
};

export default Nav;
