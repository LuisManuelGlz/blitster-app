import {
  SET_ALERT,
  REMOVE_ALERT,
  CLEAR_ALERTS,
  AlertActionTypes,
} from './types';
import { Alert } from '../../../interfaces/alert';

interface AlertState {
  alerts: Alert[];
}

const initialState: AlertState = {
  alerts: [],
};

export default (state = initialState, action: AlertActionTypes) => {
  switch (action.type) {
    case SET_ALERT:
      return { ...state, alerts: [...state.alerts, action.alert] };
    case REMOVE_ALERT:
      return {
        ...state,
        alerts: state.alerts.filter((alert: Alert) => alert.id !== action.id),
      };
    case CLEAR_ALERTS:
      return { ...state, alerts: [] };
    default:
      return state;
  }
};
