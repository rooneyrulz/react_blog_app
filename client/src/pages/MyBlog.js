import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// REDUX
import { connect } from 'react-redux';
import { getMyBlogs } from '../actions/blog';

const MyBlog = ({
  auth: { isAuthenticated, myBlogs, loading },
  getMyBlogs,
  history
}) => {
  useEffect(() => {
    getMyBlogs();
  }, []);

  if (!isAuthenticated) history.push('/login');

  return (
    <div>
      <h3>My Blogs...</h3>
    </div>
  );
};

MyBlog.propTypes = {
  auth: PropTypes.object.isRequired,
  getMyBlogs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { getMyBlogs })(MyBlog);
