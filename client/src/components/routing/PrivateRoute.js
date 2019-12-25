import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

// REDUX
import { connect } from 'react-redux';
import Spinner from '../../layouts/Spinner';

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (loading) {
          return <Spinner />;
        } else if (isAuthenticated) {
          return <Component {...props} />;
        } else {
          return <Redirect to='/login' />;
        }
      }}
    />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
