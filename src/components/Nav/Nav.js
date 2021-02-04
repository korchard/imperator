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
//logout
// import { AiOutlineLogout } from 'react-icons/ai';
//drawer open
import {BiRightArrow} from 'react-icons/bi';
//drawer close
import {BiLeftArrow} from 'react-icons/bi';

// type Props = {
//   className?: string | undefined,
// }

// interface IUser {
//   user: {
//     _id: number;
//     username: String;

//   }, 
// }

const Nav = (props) => {
  const user = useSelector((redux) => redux.user);
  const [open, setOpen] = React.useState(false); // used for the drawer opening and closing

  let loginLinkData = {
    path: '/login',
    text: 'Login',
  };

  if (user._id != null) {
    loginLinkData.path = '/operational';
    loginLinkData.text = 'Operational';
  }

  // handles the drawer opening
  // const handleDrawerOpen = () => {
  //   setOpen(true); // sets state
  //   console.log('drawer open')
  // }; // end handleDrawerOpen

  // // handles the drawer closing
  // const handleDrawerClose = () => {
  //   setOpen(false); // sets state
  //   console.log('drawer closed')
  // }; // end handleDrawerClose

  return (
    <div className={open ? 'nav' : 'navOpen'}>
      <div  className="arrowContainer">
        

{open ?
        <BiLeftArrow className="arrow" onClick={() => setOpen(!open)}/>
        :
        <BiRightArrow className="arrow" onClick={() => setOpen(!open)}/>
        
}
      </div>


    
        <div>

          <img src="../img/logo.svg" alt="logo" className="nav-logo"></img>
        </div>
   


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
