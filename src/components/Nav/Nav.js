import React from 'react';
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
import { GrAnalytics } from 'react-icons/gr'; 

const Nav = (props) => {
  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (props.store.user._id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  return (
    <div className='nav'>
      <Link to='/home'>
        <h2 className='nav-title'>Prime Solo Project</h2>
      </Link>
      <div className='nav-right'>
        <Link className='nav-link' to={loginLinkData.path}>
          {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
          {loginLinkData.text}
        </Link>
        {/* Show the link to the info page and the logout button if the user is logged in */}
        {props.store.user._id && (
          <>
            <Link className='nav-link' to='/info'>
              Info Page
            </Link>
            <Link className='nav-link' to='/operational'>
              <BsFillGearFill/> Operational 
            </Link>
            <Link className='nav-link' to='/imperator'>
              <BsFillGearFill/> Imperator
            </Link>
            <Link className='nav-link' to='/strategic'>
              <BsFillGearFill/> Strategic 
            </Link>
            <Link className='nav-link' to='/analytical'>
              <DiGoogleAnalytics/> Analytical
            </Link>
            <LogOutButton className='nav-link' />
          </>
        )}
        {/* Always show this link since the about page is not protected */}
        <Link className='nav-link' to='/about'>
          About
        </Link>
      </div>
    </div>
  );
};

export default connect(mapStoreToProps)(Nav);
