import {
  SET_ERROR_MESSAGE,
  REMOVE_ERROR_MESSAGES,
  CLEAR_ERROR_MESSAGES,
  SET_IS_EMAIL_VALID,
  SET_IS_EMAIL_INPUT_LOADING,
  SET_IS_USERNAME_INPUT_LOADING,
  SET_IS_LOGGING_IN,
  SET_IS_SIGNING_UP,
} from '../actions/actionTypes';
import { ErrorMessage } from '../../interfaces/errorMessage';

interface Payload {
  param: string;
  errorMessage: ErrorMessage;
  isEmailValid: boolean;
  isEmailInputLoading: boolean;
  isUsernameValid: boolean;
  isUsernameInputLoading: boolean;
  isLoggingIn: boolean;
  isSigningUp: boolean;
}

interface Action {
  type: string;
  payload?: Payload;
}

interface ValidationState {
  errorMessages: ErrorMessage[];
  isEmailValid: boolean | null;
  isEmailInputLoading: boolean | null;
  isUsernameValid: boolean | null;
  isUsernameInputLoading: boolean | null;
  isLoggingIn: boolean | null;
  isSigningUp: boolean | null;
}

const initialState: ValidationState = {
  errorMessages: [],
  isEmailValid: null,
  isEmailInputLoading: null,
  isUsernameValid: null,
  isUsernameInputLoading: null,
  isLoggingIn: null,
  isSigningUp: null,
};

export const validationReducer = (
  state = initialState,
  action: Action,
): ValidationState => {
  const { type, payload } = action;

  switch (type) {
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessages: [...state.errorMessages, payload!.errorMessage],
      };
    case REMOVE_ERROR_MESSAGES:
      return {
        ...state,
        errorMessages: state.errorMessages.filter(
          (err: ErrorMessage) => err.param !== payload?.param,
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
        isEmailValid: payload!.isEmailValid,
      };
    case SET_IS_EMAIL_INPUT_LOADING:
      return {
        ...state,
        isEmailInputLoading: payload!.isEmailInputLoading,
      };
    case SET_IS_USERNAME_INPUT_LOADING:
      return {
        ...state,
        isUsernameInputLoading: payload!.isUsernameInputLoading,
      };
    case SET_IS_LOGGING_IN:
      return {
        ...state,
        isLoggingIn: payload!.isLoggingIn,
      };
    case SET_IS_SIGNING_UP:
      return {
        ...state,
        isSigningUp: payload!.isSigningUp,
      };
    default:
      return state;
  }
};
