import { v4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

const setAlert = (
  msg,
  status,
  alertType,
  alertId = null,
  timeout = 4000
) => dispatch => {
  const id = v4();

  // DISPATCH SET ALERT
  dispatch({
    type: SET_ALERT,
    payload: { id, msg, status, alertType, alertId }
  });

  // DISPATCH REMOVE ALERT
  setTimeout(() => {
    dispatch({ type: REMOVE_ALERT, payload: id });
  }, timeout);
};

export default setAlert;
