import axios from 'axios';
import {
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from './types';
import setAuthHeader from '../utils/setAuthHeader';
import setAlert from '../actions/alert';

const uri = 'http://localhost:5000';

// LOAD USER
export const loadUser = () => async dispatch => {
  if (localStorage.token) setAuthHeader(localStorage.token);

  const config = {
    header: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const { data } = await axios.get(`${uri}/api/users/auth/user`, config);

    dispatch({ type: USER_LOADED, payload: data });
  } catch (error) {
    dispatch({ type: AUTH_ERROR });
  }
};

// LOGIN USER
export const loginUser = payload => async dispatch => {
  const config = {
    header: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const { data } = await axios.post(`${uri}/api/users/auth`, payload, config);
    dispatch({ type: LOGIN_SUCCESS, payload: data });

    dispatch(loadUser());
    dispatch(setAlert('You are just logged in!', 200, 'success'));
  } catch (error) {
    dispatch({ type: LOGIN_FAIL });

    // DISPATCH Alert
    dispatch(setAlert(error.response.data, error.response.status, 'danger'));
  }
};

// REGISTER USER
export const registerUser = payload => async dispatch => {
  const config = {
    header: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const { data } = await axios.post(`${uri}/api/users`, payload, config);
    dispatch({ type: REGISTER_SUCCESS, payload: data });

    dispatch(loadUser());
    dispatch(setAlert('You are just logged in!', 200, 'success'));
  } catch (error) {
    dispatch({ type: REGISTER_FAIL });

    // DISPATCH Alert
    dispatch(setAlert(error.response.data, error.response.status, 'danger'));
  }
};

// LOGOUT USER
export const logOutUser = e => dispatch => dispatch({ type: LOGOUT });
