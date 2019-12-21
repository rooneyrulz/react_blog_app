import React from 'react';

const AlertItem = ({ alert }) => {
  return <div className={`alert alert-${alert.alertType}`}>{alert.msg}</div>;
};

export default AlertItem;
