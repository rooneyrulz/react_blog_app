import axios from 'axios';
import {
  GET_BLOGS,
  GET_BLOG,
  NEW_BLOG,
  UPDATE_BLOG,
  DELETE_BLOG,
  BLOG_ERROR
} from './types';
import setAlert from '../actions/alert';

const uri = 'http://localhost:5000';

// GET ALL BLOGS
export const getBlogs = () => async dispatch => {
  const config = {
    header: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const { data } = await axios.get(`${uri}/api/posts`, config);

    //   DISPATCH GET_BLOGS
    dispatch({ type: GET_BLOGS, payload: data });
  } catch (error) {
    // DISPATCH BLOG_ERROR
    dispatch({ type: BLOG_ERROR, payload: { msg: error.response.data } });

    // DISPATCH SET_ALERT
    // dispatch(setAlert(error.response.data, error.response.status, 'danger'));
  }
};

// ADD NEW BLOGS
export const addBlog = (formData, history) => async dispatch => {
  try {
    const config = {
      header: {
        'Content-Type': 'application/json'
      }
    };

    const { data } = await axios.post(`${uri}/api/posts`, formData, config);

    // DISPATCH NEW_BLOG
    dispatch({ type: NEW_BLOG, payload: data });
    history.push('/blogs');

    // DISPATCH SET_ALERT
    dispatch(setAlert('Awesome! You just posted here!', 201, 'success'));
  } catch (error) {
    // DISPATCH BLOG ERROR
    dispatch({ type: BLOG_ERROR, payload: { msg: error.response.data } });

    // DISPATCH SET_ALERT
    dispatch(setAlert(error.response.data, error.response.status, 'danger'));
  }
};

// GET BLOG BY ID
export const getBlog = id => async dispatch => {
  try {
    const config = {
      header: {
        'Content-Type': 'application/json'
      }
    };

    const { data } = await axios.get(`${uri}/api/posts/${id}`, config);
    // DISPATCH GET_BLOG
    dispatch({ type: GET_BLOG, payload: data });
  } catch (error) {
    // DISPATCH BLOG ERROR
    dispatch({ type: BLOG_ERROR, payload: { msg: error.response.data } });

    // DISPATCH SET_ALERT
    // dispatch(setAlert(error.response.data, error.response.status, 'danger'));
  }
};

// DELETE BLOG
export const deleteBlog = id => async dispatch => {
  try {
    const config = {
      header: {
        'Content-Type': 'application/json'
      }
    };

    if (window.confirm('Are you wanna delete this blog?')) {
      const res = await axios.delete(`${uri}/api/posts/${id}`, config);
      // DISPATCH DELETE_BLOG
      dispatch({ type: DELETE_BLOG, payload: id });

      // DISPATCH SET_ALERT
      dispatch(setAlert('Blog has been removed!', 200, 'success'));
    }
  } catch (error) {
    // DISPATCH BLOG ERROR
    dispatch({ type: BLOG_ERROR, payload: { msg: error.response.data } });

    // DISPATCH SET_ALERT
    dispatch(setAlert(error.response.data, error.response.status, 'danger'));
  }
};
