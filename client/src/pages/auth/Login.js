import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className='Login'>
      <header className='text-center'>
        <h3>Log In</h3>
      </header>
      <br />
      <div className='card'>
        <div className='card-body'>
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
              <label htmlFor='password'>Password</label>
              <input
                id='password'
                className='form-control form-control-lg'
                name='password'
                placeholder='Enter Password'
                onChange={e => onChange(e)}
              />
            </div>
            <button
              type='submit'
              id='btn-login'
              className='btn btn-lg btn-primary'
            >
              LOGIN
            </button>
          </form>
        </div>
        <div className='card-footer text-center'>
          <p className='text-muted lead'>
            Don't you already have an account? Let's register{' '}
            <Link to='/register'>here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
