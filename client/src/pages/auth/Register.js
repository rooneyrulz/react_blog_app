import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password1: '',
    password2: ''
  });

  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className='Register d__center'>
      <header className='text-center'>
        <h3>Register</h3>
      </header>
      <br />
      <form onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            className='form-control form-control-lg'
            name='username'
            placeholder='Enter Username'
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            className='form-control form-control-lg'
            name='email'
            placeholder='Enter Email'
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password1'>Password</label>
          <input
            id='password1'
            className='form-control form-control-lg'
            name='password1'
            placeholder='Enter Password'
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            id='password2'
            className='form-control form-control-lg'
            name='password2'
            placeholder='Confirm Password'
            onChange={e => onChange(e)}
          />
        </div>
        <button
          type='submit'
          id='btn-register'
          className='btn btn-lg btn-success'
        >
          REGISTER
        </button>
      </form>
      <p className='text-muted lead mt-4 text-center'>
        If you already have an account, Let's login{' '}
        <Link to='/login'>here</Link>
      </p>
    </div>
  );
};

export default Register;
