import React from 'react';
import PropTypes from 'prop-types';

// REDUX
import { connect } from 'react-redux';

const MyBlog = ({ isAuthenticated, history }) => {
  if (!isAuthenticated) history.push('/login');

  return (
    <div>
      <h3>My Blogs...</h3>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {})(MyBlog);
