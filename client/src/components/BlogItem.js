import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// REDUX
import { connect } from 'react-redux';
import { deleteBlog } from '../actions/blog';

const BlogItem = ({ blog, deleteBlog }) => {
  const onDelete = id => deleteBlog(id);

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
          to={`/blog/edit`}
          style={{ textDecoration: 'none', color: '#111' }}
        >
          <p className='lead mb-0'>{blog.title}</p>
        </Link>
        <div className='card-action'>
          <Link to={`/blog/${blog._id}`} className='btn btn-info btn-sm'>
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

BlogItem.propTypes = {
  deleteBlog: PropTypes.func.isRequired
};

export default connect(null, { deleteBlog })(BlogItem);
