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
    console.log(data);

    //   DISPATCH GET_BLOGS
    dispatch({ type: GET_BLOGS, payload: data });
  } catch (error) {
    console.log(error);
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
    console.log(data);

    // DISPATCH NEW_BLOG
    dispatch({ type: NEW_BLOG, payload: data });
    history.push('/blogs');
  } catch (error) {
    console.log(error);
    // DISPATCH BLOG ERROR
    dispatch({ type: BLOG_ERROR, payload: { msg: error.response.data } });

    // DISPATCH SET_ALERT
    dispatch(setAlert(error.response.data, error.response.status, 'danger'));
  }
};
