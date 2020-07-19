import { Dispatch, AnyAction } from 'redux';
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
  dispatch: Dispatch<AnyAction>,
) => {
  dispatch({ type: SET_ERROR_MESSAGE, payload: errorMessage });
};

export const removeErrorMessages = (param: string) => (
  dispatch: Dispatch<AnyAction>,
) => {
  dispatch({ type: REMOVE_ERROR_MESSAGES, payload: param });
};

export const clearErrorMessages = () => (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: CLEAR_ERROR_MESSAGES });
};

export const setIsEmailValid = (isEmailValid: boolean) => (
  dispatch: Dispatch<AnyAction>,
) => {
  dispatch({ type: SET_IS_EMAIL_VALID, payload: isEmailValid });
};

export const setIsEmailInputLoading = (isEmailInputLoding: boolean) => (
  dispatch: Dispatch<AnyAction>,
) => {
  dispatch({ type: SET_IS_EMAIL_INPUT_LOADING, payload: isEmailInputLoding });
};

export const setIsUsernameInputLoading = (isUsernameInputLoding: boolean) => (
  dispatch: Dispatch<AnyAction>,
) => {
  dispatch({
    type: SET_IS_USERNAME_INPUT_LOADING,
    payload: isUsernameInputLoding,
  });
};
