import React from 'react';

const NewBlog = () => {
  return (
    <div className='New-Blog d__center'>
      <header className='d__flex'>
        <h3>Create New Blogs!</h3>
        <div></div>
      </header>
      <hr />
      <br />
      <form>
        <div className='form-group'>
          <input
            type='text'
            name='title'
            placeholder='Enter title'
            className='form-control form-control-lg'
          />
        </div>
        <div className='form-group'>
          <textarea
            type='text'
            name='description'
            placeholder='Enter description'
            className='form-control form-control-lg'
          ></textarea>
        </div>
        <button type='submit' className='btn btn-success btn-lg'>
          CREATE
        </button>
      </form>
    </div>
  );
};

export default NewBlog;
