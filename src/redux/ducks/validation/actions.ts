import { ThunkDispatch } from 'redux-thunk';
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

export const setErrorMessage = (errorMessage: ErrorMessage) => (
  dispatch: ThunkDispatch<{}, {}, ValidationActionTypes>,
) => {
  dispatch({ type: SET_ERROR_MESSAGE, errorMessage });
};

export const removeErrorMessages = (param: string) => (
  dispatch: ThunkDispatch<{}, {}, ValidationActionTypes>,
) => {
  dispatch({ type: REMOVE_ERROR_MESSAGES, param });
};

export const clearErrorMessages = () => (
  dispatch: ThunkDispatch<{}, {}, ValidationActionTypes>,
) => {
  dispatch({ type: CLEAR_ERROR_MESSAGES });
};

export const setIsEmailValid = (isEmailValid: boolean) => (
  dispatch: ThunkDispatch<{}, {}, ValidationActionTypes>,
) => {
  dispatch({ type: SET_IS_EMAIL_VALID, isEmailValid });
};

export const setIsEmailInputLoading = (isEmailInputLoading: boolean) => (
  dispatch: ThunkDispatch<{}, {}, ValidationActionTypes>,
) => {
  dispatch({
    type: SET_IS_EMAIL_INPUT_LOADING,
    isEmailInputLoading,
  });
};

export const setIsUsernameInputLoading = (isUsernameInputLoading: boolean) => (
  dispatch: ThunkDispatch<{}, {}, ValidationActionTypes>,
) => {
  dispatch({
    type: SET_IS_USERNAME_INPUT_LOADING,
    isUsernameInputLoading,
  });
};

export const setIsLoggingIn = (isLoggingIn: boolean) => (
  dispatch: ThunkDispatch<{}, {}, ValidationActionTypes>,
) => {
  dispatch({
    type: SET_IS_LOGGING_IN,
    isLoggingIn,
  });
};

export const setIsSigningUp = (isSigningUp: boolean) => (
  dispatch: ThunkDispatch<{}, {}, ValidationActionTypes>,
) => {
  dispatch({
    type: SET_IS_SIGNING_UP,
    isSigningUp,
  });
};
