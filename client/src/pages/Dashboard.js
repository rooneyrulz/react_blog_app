import React from 'react';
import PropTypes from 'prop-types';

// REDUX
import { connect } from 'react-redux';

// COMPONENTS
import Spinner from '../layouts/Spinner';

const Dashboard = ({ isAuthenticated, loading, history }) => {
  if (!isAuthenticated) history.push('/login');

  return loading ? <Spinner /> : <div>Dashboard</div>;
};

Dashboard.propTypes = {
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading
});

export default connect(mapStateToProps)(Dashboard);
