import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// REDUX
import { connect } from 'react-redux';
import { logOutUser } from '../../actions/auth';

const LogOut = ({ logOutUser }) => {
  return (
    <Link className='nav-link' to='#' onClick={e => logOutUser(e)}>
      Logout
    </Link>
  );
};

LogOut.propTypes = {
  logOutUser: PropTypes.func.isRequired
};

export default connect(null, { logOutUser })(LogOut);
