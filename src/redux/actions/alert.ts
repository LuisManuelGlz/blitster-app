import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { SET_ALERT, REMOVE_ALERT, CLEAR_ALERTS } from './actionTypes';

export const setAlert = (message: string, typeAlert: string) => (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
  const id = uuidv4();
  dispatch({ type: SET_ALERT, payload: { id, message, typeAlert } });
};

export const removeAlert = (id: string | number) => (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
  dispatch({ type: REMOVE_ALERT, payload: { id } });
};

export const clearAlerts = () => (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
  dispatch({ type: CLEAR_ALERTS });
};
