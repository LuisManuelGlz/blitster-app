import {
  SET_ERROR_MESSAGE,
  REMOVE_ERROR_MESSAGES,
  CLEAR_ERROR_MESSAGES,
  SET_IS_EMAIL_VALID,
  SET_IS_EMAIL_INPUT_LOADING,
  SET_IS_USERNAME_INPUT_LOADING,
  SET_IS_LOGGING_IN,
  SET_IS_SIGNING_UP,
  ValidationActionTypes,
} from './types';
import { ErrorMessage } from '../../../interfaces/errorMessage';

interface ValidationState {
  errorMessages: ErrorMessage[];
  isEmailValid: boolean | null;
  isEmailInputLoading: boolean | null;
  isUsernameInputLoading: boolean | null;
  isLoggingIn: boolean | null;
  isSigningUp: boolean | null;
}

const initialState: ValidationState = {
  errorMessages: [],
  isEmailValid: null,
  isEmailInputLoading: null,
  isUsernameInputLoading: null,
  isLoggingIn: null,
  isSigningUp: null,
};

export default (state = initialState, action: ValidationActionTypes) => {
  switch (action.type) {
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessages: [...state.errorMessages, action.errorMessage],
      };
    case REMOVE_ERROR_MESSAGES:
      return {
        ...state,
        errorMessages: state.errorMessages.filter(
          (err: ErrorMessage) => err.param !== action.param,
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
        isEmailValid: action.isEmailValid,
      };
    case SET_IS_EMAIL_INPUT_LOADING:
      return {
        ...state,
        isEmailInputLoading: action.isEmailInputLoading,
      };
    case SET_IS_USERNAME_INPUT_LOADING:
      return {
        ...state,
        isUsernameInputLoading: action.isUsernameInputLoading,
      };
    case SET_IS_LOGGING_IN:
      return {
        ...state,
        isLoggingIn: action.isLoggingIn,
      };
    case SET_IS_SIGNING_UP:
      return {
        ...state,
        isSigningUp: action.isSigningUp,
      };
    default:
      return state;
  }
};
