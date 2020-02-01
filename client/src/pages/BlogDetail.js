import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// REDUX
import { connect } from 'react-redux';
import { getBlog, updateBlog } from '../actions/blog';

const BlogDetail = ({
  blog: { blog, loading },
  getBlog,
  updateBlog,
  history,
  match
}) => {
  const [formData, setFormData] = useState({ title: '', description: '' });

  useEffect(() => {
    getBlog(match.params.id);
    setFormData({
      ...formData,
      title: loading || !blog ? '' : blog.title,
      description: loading || !blog ? '' : blog.description
    });
  }, [getBlog, loading, match.params.id]);

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    updateBlog(formData, match.params.id, history);
  };

  const { title, description } = formData;

  return (
    <div className='New-Blog d__center'>
      <header className='d__flex'>
        <h3>Update Blogs!</h3>
        <div></div>
      </header>
      <hr />
      <br />
      <form onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            name='title'
            value={title}
            placeholder='Enter title'
            className='form-control form-control-lg'
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <textarea
            type='text'
            name='description'
            value={description}
            placeholder='Enter description'
            className='form-control form-control-lg'
            onChange={e => onChange(e)}
          ></textarea>
        </div>
        <button type='submit' className='btn btn-success btn-lg'>
          UPDATE
        </button>
      </form>
    </div>
  );
};

BlogDetail.propTypes = {
  blog: PropTypes.object.isRequired,
  getBlog: PropTypes.func.isRequired,
  updateBlog: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  blog: state.blog
});

export default connect(mapStateToProps, { getBlog, updateBlog })(BlogDetail);
