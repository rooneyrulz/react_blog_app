import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// REDUX
import { connect } from 'react-redux';
import { getMyBlogs } from '../actions/blog';

// COMPONENTS
import BlogItem from '../components/BlogItem';
import Spinner from '../layouts/Spinner';

const MyBlog = ({
  auth: { isAuthenticated },
  blog: { myBlogs, loading },
  getMyBlogs,
  history
}) => {
  useEffect(() => {
    getMyBlogs();
  }, []);

  if (!isAuthenticated) history.push('/login');

  const myBlogList =
    myBlogs.length > 0 ? (
      myBlogs.map(blog => <BlogItem key={blog._id} blog={blog} />)
    ) : (
      <p className='lead'>You have no blogs..</p>
    );

  return (
    <div className='Myblogs'>
      <header>
        <h3>My Blogs...</h3>
      </header>
      <hr />
      <br />
      {loading ? <Spinner /> : myBlogList}
    </div>
  );
};

MyBlog.propTypes = {
  auth: PropTypes.object.isRequired,
  blog: PropTypes.object.isRequired,
  getMyBlogs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  blog: state.blog
});

export default connect(mapStateToProps, { getMyBlogs })(MyBlog);
