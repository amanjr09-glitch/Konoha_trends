import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {CgProfile} from 'react-icons/cg';
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { authentication } from './firebase/firebase';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [isUserSignedIn,setUserSignedIn] = useState(true);

  authentication.onAuthStateChanged((user) => {
    console.log('user in auth listener',user)
    if(user){
      return setUserSignedIn(true);
    }
    setUserSignedIn(false);
  });
  const logout = () =>{
  authentication.signOut()
}
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
       
            <img className='logo' src="/images/logo1.png"/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
      
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Categories'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Categories
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>

            <li className='nav-item1'>
             { isUserSignedIn === true ?
          <Menu menuButton={<MenuButton></MenuButton>} transition>
          <MenuItem onClick={logout}>LogOut</MenuItem>
          <MenuItem>
          <a> 
            < Link to="/Profile">Profile</Link>
            </a>
          </MenuItem>
          <MenuItem>Close Window</MenuItem>
      </Menu>
          :null
          }
            
            </li>
          </ul>
          { isUserSignedIn === true ?
          null
          :button && <Button buttonStyle='btn--outline'>SIGN UP</Button>
          }
          <div>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
