import {
  GET_BLOG,
  GET_BLOGS,
  NEW_BLOG,
  UPDATE_BLOG,
  DELETE_BLOG,
  BLOG_ERROR
} from '../actions/types';

const initialState = {
  loading: true,
  blogs: [],
  blog: null,
  error: null
};

const blogReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_BLOGS:
      return {
        ...state,
        loading: false,
        blogs: payload
      };

    case GET_BLOG:
      return {
        ...state,
        loading: false,
        blog: payload
      };

    case NEW_BLOG:
      return {
        ...state,
        loading: false,
        blogs: [...state.blogs, payload]
      };

    case UPDATE_BLOG:
      return {
        ...state,
        loading: false,
        blogs: state.blogs.map(blog =>
          blog._id === payload.id ? { ...payload.data } : blog
        )
      };

    case DELETE_BLOG:
      return {
        ...state,
        loading: false,
        blogs: state.blogs.filter(blog => blog._id !== payload)
      };

    case BLOG_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };

    default:
      return state;
  }
};

export default blogReducer;
