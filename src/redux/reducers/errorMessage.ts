import {
  SET_ERROR_MESSAGE,
  CLEAR_ERROR_MESSAGES,
} from '../actions/actionTypes';
import { ErrorMessage } from '../../interfaces/errorMessage';

interface Action {
  type: string;
  payload?: ErrorMessage;
}

const initialState: ErrorMessage[] = [];

export default (state = initialState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ERROR_MESSAGE:
      return [...state, payload];
    case CLEAR_ERROR_MESSAGES:
      return [];
    default:
      return state;
  }
};
