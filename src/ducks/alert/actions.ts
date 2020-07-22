import { ThunkDispatch } from 'redux-thunk';
import {
  SET_ALERT,
  REMOVE_ALERT,
  CLEAR_ALERTS,
  AlertActionTypes,
} from './types';
import { Alert } from '../../interfaces/alert';

export const setAlert = (alert: Alert) => (
  dispatch: ThunkDispatch<{}, {}, AlertActionTypes>,
) => {
  dispatch({ type: SET_ALERT, alert });
};

export const removeAlert = (id: string) => (
  dispatch: ThunkDispatch<{}, {}, AlertActionTypes>,
) => {
  dispatch({ type: REMOVE_ALERT, id });
};

export const clearAlerts = () => (
  dispatch: ThunkDispatch<{}, {}, AlertActionTypes>,
) => {
  dispatch({ type: CLEAR_ALERTS });
};
