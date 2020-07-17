import 'react-native-get-random-values';
import { Dispatch, AnyAction } from 'redux';
import { SET_ERROR_MESSAGE, CLEAR_ERROR_MESSAGES } from './actionTypes';
import { ErrorMessage } from '../../interfaces/errorMessage';

export const setErrorMessage = (errorMessage: ErrorMessage) => (
  dispatch: Dispatch<AnyAction>,
) => {
  dispatch({ type: SET_ERROR_MESSAGE, payload: errorMessage });
};

export const clearErrorMessages = () => (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: CLEAR_ERROR_MESSAGES });
};
