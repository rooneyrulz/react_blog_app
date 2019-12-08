import axios from 'axios';

export default token => {
  if (token) {
    axios.defaults.headers['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers['x-auth-token'];
  }
};
