import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
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
    </div>
  );
};

export default Blog;
