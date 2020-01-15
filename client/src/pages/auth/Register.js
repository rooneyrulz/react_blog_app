import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// REDUX
import { connect } from 'react-redux';
import { registerUser } from '../../actions/auth';
import setAlert from '../../actions/alert';

// COMPONENTS
import Spinner from '../../layouts/Spinner';

const Register = ({
  auth: { isAuthenticated, loading },
  registerUser,
  setAlert,
  history
}) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password1: '',
    password2: ''
  });

  const { username, email, password1, password2 } = formData;

  const onSubmit = e => {
    e.preventDefault();
    if (password1 !== password2)
      setAlert('Passwords dont match!', 400, 'danger');

    const body = { username, email, password: password1 };
    registerUser(body);
  };

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  if (isAuthenticated) history.push('/dashboard');

  return loading && isAuthenticated ? (
    <Spinner />
  ) : (
    <div className='Register d__center'>
      <header className='text-center'>
        <h3>Register</h3>
      </header>
      <br />
      <form onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
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
            type='email'
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
            type='password'
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
            type='password'
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

Register.propTypes = {
  auth: PropTypes.object.isRequired,
  registerUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { registerUser, setAlert })(Register);
