import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = ({ blog }) => {
  const onDelete = id => console.log(id);

  return (
    <div className='card mb-2'>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
        className='card-body blog-item-body'
      >
        <Link
          to={`/blog/${blog._id}`}
          style={{ textDecoration: 'none', color: '#111' }}
        >
          <p className='lead mb-0'>{blog.title}</p>
        </Link>
        <div className='card-action'>
          <Link to='/blog/edit' className='btn btn-info btn-sm'>
            Edit
          </Link>
          <button
            onClick={e => onDelete(blog._id)}
            className='btn btn-danger btn-sm ml-1'
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
