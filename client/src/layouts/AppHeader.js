import React from 'react';

const AppHeader = () => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark mb-5'>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          Blog App
        </a>
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
            <li className='nav-item active'>
              <a className='nav-link' href='/home'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/about'>
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
