import React, { useState } from 'react';

// REDUX
import { connect } from 'react-redux';
import {} from '../actions/blog';
import setAlert from '../actions/alert';

const BlogDetail = ({ setAlert, history }) => {
  const [formData, setFormData] = useState({ title: '', description: '' });

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
  };

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
            placeholder='Enter title'
            className='form-control form-control-lg'
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <textarea
            type='text'
            name='description'
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

// const mapStateToProps = state => ({

// });

export default connect(null, {})(BlogDetail);
