import React from 'react';

const BlogItem = ({ blog }) => {
  return (
    <div className='card mb-2'>
      <div className='card-body'>
        <p>{blog.title}</p>
      </div>
    </div>
  );
};

export default BlogItem;
