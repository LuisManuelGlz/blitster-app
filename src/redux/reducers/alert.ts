import { SET_ALERT, REMOVE_ALERT, CLEAR_ALERTS } from '../actions/actionTypes';
import { Alert } from '../../interfaces/alert';

interface Payload {
  id: number | string;
  alert: Alert;
}

interface Action {
  type: string;
  payload?: Payload;
}

const initialState: Alert[] = [];

export const alertReducer = (state = initialState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      console.log(`\n\n\n ${JSON.stringify(payload!.alert)} \n\n\n`);
      return [...state, payload!.alert];
    case REMOVE_ALERT:
      return state.filter((alert: Alert) => alert.id !== payload!.id);
    case CLEAR_ALERTS:
      return [];
    default:
      return state;
  }
};
