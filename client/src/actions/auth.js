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
    console.log(data);

    dispatch({ type: USER_LOADED, payload: data });
  } catch (error) {
    console.log(error.message);
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
    console.log(data);

    dispatch({ type: REGISTER_SUCCESS, payload: data });
    dispatch(loadUser());
  } catch (error) {
    console.log(error.message);
    dispatch({ type: REGISTER_FAIL });
  }
};
