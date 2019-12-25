import React from 'react';
import PropTypes from 'prop-types';

// REDUX
import { connect } from 'react-redux';

// COMPONENTS

const Dashboard = ({ isAuthenticated, history }) => {
  if (!isAuthenticated) history.push('/login');

  return <div>Dashboard</div>;
};

Dashboard.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Dashboard);
