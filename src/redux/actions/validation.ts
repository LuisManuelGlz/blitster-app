import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import {
  SET_ERROR_MESSAGE,
  REMOVE_ERROR_MESSAGES,
  CLEAR_ERROR_MESSAGES,
  SET_IS_EMAIL_VALID,
  SET_IS_EMAIL_INPUT_LOADING,
  SET_IS_USERNAME_INPUT_LOADING,
} from './actionTypes';
import { ErrorMessage } from '../../interfaces/errorMessage';

export const setErrorMessage = (errorMessage: ErrorMessage) => (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
  dispatch({ type: SET_ERROR_MESSAGE, payload: { errorMessage } });
};

export const removeErrorMessages = (param: string) => (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
  dispatch({ type: REMOVE_ERROR_MESSAGES, payload: { param } });
};

export const clearErrorMessages = () => (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
  dispatch({ type: CLEAR_ERROR_MESSAGES });
};

export const setIsEmailValid = (isEmailValid: boolean) => (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
  dispatch({ type: SET_IS_EMAIL_VALID, payload: { isEmailValid } });
};

export const setIsEmailInputLoading = (isEmailInputLoading: boolean) => (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
  dispatch({
    type: SET_IS_EMAIL_INPUT_LOADING,
    payload: { isEmailInputLoading },
  });
};

export const setIsUsernameInputLoading = (isUsernameInputLoading: boolean) => (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
  dispatch({
    type: SET_IS_USERNAME_INPUT_LOADING,
    payload: { isUsernameInputLoading },
  });
};
