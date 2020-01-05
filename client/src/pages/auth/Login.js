import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// REDUX
import { connect } from 'react-redux';
import { loginUser } from '../../actions/auth';

// COMPONENTS
import Spinner from '../../layouts/Spinner';

const Login = ({ loginUser, isAuthenticated, loading, history }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const onSubmit = e => {
    e.preventDefault();
    loginUser(formData);
  };

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  if (isAuthenticated) history.push('/dashboard');

  return loading && isAuthenticated ? (
    <Spinner />
  ) : (
    <div className='Login d__center'>
      <header className='text-center'>
        <h3>Log In</h3>
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
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            className='form-control form-control-lg'
            name='password'
            placeholder='Enter Password'
            onChange={e => onChange(e)}
          />
        </div>
        <button type='submit' id='btn-login' className='btn btn-lg btn-primary'>
          LOGIN
        </button>
      </form>

      <p className='text-muted lead mt-3 text-center'>
        Don't you already have an account? Let's register{' '}
        <Link to='/register'>here</Link>
      </p>
    </div>
  );
};

Login.propTypes = {
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading
});

export default connect(mapStateToProps, { loginUser })(Login);
