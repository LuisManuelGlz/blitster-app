import { Dispatch, AnyAction } from 'redux';
import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT, CLEAR_ALERTS } from './actionTypes';

export const setAlert = (message: string, typeAlert: string) => (
  dispatch: Dispatch<AnyAction>,
) => {
  const id = uuid.v4();
  dispatch({ type: SET_ALERT, payload: { id, message, typeAlert } });
};

export const removeAlert = (id: string) => (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: REMOVE_ALERT, payload: id });
};

export const clearAlerts = () => (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: CLEAR_ALERTS });
};
