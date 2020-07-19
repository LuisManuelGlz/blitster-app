import {
  SET_ERROR_MESSAGE,
  REMOVE_ERROR_MESSAGES,
  CLEAR_ERROR_MESSAGES,
  SET_IS_EMAIL_VALID,
  SET_IS_EMAIL_INPUT_LOADING,
  SET_IS_USERNAME_INPUT_LOADING,
} from '../actions/actionTypes';
import { ErrorMessage } from '../../interfaces/errorMessage';

interface Action {
  type: string;
  payload?: string | boolean | ErrorMessage;
}

const initialState = {
  errorMessages: [],
  isEmailValid: null,
  isEmailInputLoading: null,
  isUsernameValid: null,
  isUsernameInputLoading: null,
};

export default (state = initialState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessages: [...state.errorMessages, payload],
      };
    case REMOVE_ERROR_MESSAGES:
      return {
        ...state,
        errorMessages: state.errorMessages.filter(
          (err: ErrorMessage) => err.param !== payload,
        ),
      };
    case CLEAR_ERROR_MESSAGES:
      return {
        ...state,
        errorMessages: [],
      };
    case SET_IS_EMAIL_VALID:
      return {
        ...state,
        isEmailValid: payload,
      };
    case SET_IS_EMAIL_INPUT_LOADING:
      return {
        ...state,
        isEmailInputLoading: payload,
      };
    case SET_IS_USERNAME_INPUT_LOADING:
      return {
        ...state,
        isUsernameInputLoading: payload,
      };
    default:
      return state;
  }
};
