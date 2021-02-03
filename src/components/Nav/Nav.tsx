import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';

// npm install react-icons --save
// nav icons 
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

type Props = {
  className?: string | undefined,
}

interface IUser {
  user: {
    _id: number;
    username: String;

  }, 
}

const Nav: React.FC<Props> = () => {
  const user = useSelector((redux: IUser) => redux.user);

  let loginLinkData = {
    path: '/login',
    text: 'Login',
  };

  if (user._id != null) {
    loginLinkData.path = '/operational';
    loginLinkData.text = 'Operational';
  }

  return (
    <div className='nav'>
      <Link to='/home'>
        <div>
          <img src="../img/logo.svg" alt="logo" className="nav-logo"></img>
        </div>
      </Link>
      <div className='nav-right'>
        {user._id ? null 
    :          <Link className='nav-link' to={loginLinkData.path}>  
            {loginLinkData.text}
            </Link> } 
        {/* Show the link to the info page and the logout button if the user is logged in */}
        {user._id && (
          <>
            <div>
              <Link className='nav-link' to='/operational'>
                  <BsFillGearFill /><span className="icon-btn">Operational</span>
              </Link>
            </div>
            <div>
              <Link className='nav-link' to='/imperator'>
                  <AiOutlineTable /><span className="icon-btn">Imperator</span>
              </Link>
            </div>
            <div>
              <Link className='nav-link' to='/strategic'>
                  <SiMicrostrategy /><span className="icon-btn">Strategic</span>
              </Link>
            </div>
            <div>
              <Link className='nav-link' to='/analytical'>
                  <DiGoogleAnalytics /><span className="icon-btn">Analytical</span>
              </Link>
            </div>
            <LogOutButton/>
          </>
        )}
        {/* Always show this link since the about page is not protected */}

      </div>
    </div>
  );
};

export default connect(mapStoreToProps)(Nav);
