import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// REDUX
import { connect } from 'react-redux';
import { getBlogs } from '../actions/blog';

// COMPONENTS
import BlogItem from '../components/BlogItem';
import Spinner from '../layouts/Spinner';

const Blog = ({ blog: { loading, blogs }, getBlogs }) => {
  useEffect(() => {
    getBlogs();
  }, []);

  const blogList =
    blogs.length > 0 ? (
      blogs.map(blog => <BlogItem blog={blog} key={blog._id} />)
    ) : (
      <p className='lead'>No blogs found yet!</p>
    );

  return (
    <div className='Blog'>
      <header className='d__flex'>
        <h3>Blogs</h3>
        <Link to='/new-blog' className='btn btn-outline-info'>
          New Blog!
        </Link>
      </header>
      <hr />
      <br />
      <Fragment>
        {loading ? <Spinner /> : <div className='blog-content'>{blogList}</div>}
      </Fragment>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  getBlogs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  blog: state.blog
});

export default connect(mapStateToProps, { getBlogs })(Blog);
