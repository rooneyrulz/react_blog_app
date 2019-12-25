import {
  BLOG,
  BLOGS,
  NEW_BLOG,
  UPDATE_BLOG,
  DELETE_BLOG
} from '../actions/types';

const initialState = {
  loading: true,
  blogs: [],
  blog: null
};

const blogReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BLOGS:
      break;

    case BLOG:
      break;

    case NEW_BLOG:
      break;

    default:
      return state;
  }
};

export default blogReducer;
