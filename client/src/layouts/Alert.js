import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// COMPONENTS
import AlertItem from './AlertItem';

const Alert = ({ alerts }) => {
  const appendAlerts = alerts.map(alert => (
    <AlertItem key={alert.id} alert={alert} />
  ));
  return <div className='d__center'>{appendAlerts}</div>;
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
