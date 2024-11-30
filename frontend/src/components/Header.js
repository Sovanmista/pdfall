import React from 'react';
import Logo from '../images/PDFALL.png';
import { Link } from 'react-router-dom';

function Header() {
  const showLogin = () => {
    const logindrop = document.getElementById('logindrop');
    if (logindrop.style.display === 'none') {
      logindrop.style.display = 'flex';
      logindrop.style.flexDirection = 'column';
      logindrop.style.width = '105px';
      logindrop.style.backgroundColor = 'white';
      logindrop.style.borderRadius = '0px 0px 10px 10px';
    }
    else {
      logindrop.style.display = 'none';
    }
  };

  const showDropdown = () => {
    const dropdown = document.getElementById('myDropdown');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
      dropdown.style.display = 'flex';
      dropdown.style.flexDirection = 'column';
      dropdown.style.width = '130px';
      dropdown.style.backgroundColor = 'white';
      dropdown.style.borderRadius = '0px 0px 10px 10px';
    } else {
      dropdown.style.display = 'none';
    }
  };

  return (
    <div className='header'>
      <img className='logo' src={Logo} alt='Logo' />
      <div className='lists' style={{ height: 64 }}>
        <ul className='headerlist roboto-regular'>
          <li className='listitem '>Home</li>
          <div className='dropdown'>
            <li onClick={() => showDropdown()} className='listitem dropbtn'>Category</li>
            <div id='myDropdown' className='dropdown-content'>
              <a style={{ color: 'black', textDecoration: 'none', justifyContent: 'center', textAlign: 'center', borderBottom: '2px solid black', paddingBottom: '10px' }} href=''>Music</a>
              <a style={{ color: 'black', textDecoration: 'none', justifyContent: 'center', textAlign: 'center', paddingBottom: '10px', paddingTop: '10px', borderBottom: '2px solid black' }} href=''>Engineering</a>
              <a style={{ color: 'black', textDecoration: 'none', justifyContent: 'center', textAlign: 'center', paddingBottom: '10px', borderBottom: '2px solid black', paddingTop: '10px' }} href=''>Exam</a>
              <a style={{ color: 'black', textDecoration: 'none', justifyContent: 'center', textAlign: 'center', paddingBottom: '10px', paddingTop: '10px' }} href=''>Law</a>
            </div>
          </div>
          <a href='#contact' style={{ textDecoration: 'none', color: 'black' }}>
            <li className='listitem'>Contact Us</li>
          </a>
          <li className='listitem'>About Us</li>
          <div>
            <li className='listitem' onClick={() => showLogin()}>Login</li>
            <div id='logindrop' className='loginDrop' style={{ display: 'none', flexDirection: 'column', textAlign: 'center' }}>
              <a href='' style={{ color: 'black', textDecoration: 'none', justifyContent: 'center', textAlign: 'center', borderBottom: '2px solid black', paddingBottom: '10px' }}>Sign Up</a>
              <a href='' style={{ color: 'black', textDecoration: 'none', justifyContent: 'center', textAlign: 'center', borderBottom: '2px solid black', paddingBottom: '10px' }}>Log Out</a>
              <a href='' style={{ color: 'black', textDecoration: 'none', justifyContent: 'center', textAlign: 'center',paddingBottom: '10px' }}>Edit Profile</a>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Header;
