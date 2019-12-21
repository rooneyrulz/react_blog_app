import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const AppHeader = () => {
  return (
    <nav className='navbar navbar-expand-md navbar-light mb-5'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          Blog
        </Link>
        <button
          className='navbar-toggler d-lg-none'
          type='button'
          data-toggle='collapse'
          data-target='#collapsibleNavId'
          aria-controls='collapsibleNavId'
          aria-expanded='false'
          aria-label='Toggle navigation'
        ></button>
        <div className='collapse navbar-collapse' id='collapsibleNavId'>
          <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
            <li className='nav-item'>
              <NavLink exact className='nav-link' to='/home'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink exact className='nav-link' to='/blogs'>
                Blogs
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink exact className='nav-link' to='/about'>
                About
              </NavLink>
            </li>
          </ul>
          <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
            <li className='nav-item'>
              <NavLink exact className='nav-link' to='/register'>
                Register
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink exact className='nav-link' to='/login'>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
