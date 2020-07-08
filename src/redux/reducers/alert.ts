import { SET_ALERT, REMOVE_ALERT, CLEAR_ALERTS } from '../actions/actionTypes';
import { Alert } from '../../interfaces/alert';

interface Action {
  type: string;
  payload?: Alert;
}

const initialState: Alert[] = [];

export default (state = initialState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert: Alert) => alert.id !== payload?.id);
    case CLEAR_ALERTS:
      return [];
    default:
      return state;
  }
};
