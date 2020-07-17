import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { LOGIN_SUCCESS, LOGIN_FAIL } from './actionTypes';
import { setAlert, clearAlerts } from './alert';
import { setErrorMessage, clearErrorMessages } from './errorMessage';
import authClient from '../../api/authClient';
import { UserForLogin } from '../../interfaces/user';
import { ErrorMessage } from '../../interfaces/errorMessage';

export const checkEmail = (email: string) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
  try {
    await authClient.post('check-email', { email });
  } catch (error) {
    const { errors } = error.response.data;

    dispatch(clearAlerts());
    errors.map((err: { msg: string }) => dispatch(setAlert(err.msg, 'Error')));
  }
};

export const login = (user: UserForLogin) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
  console.log('Hola');
  dispatch(clearErrorMessages());

  try {
    const res = await authClient.post('login', user);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    const { status, data } = error.response;

    if (status === 404 || status === 500) {
      dispatch(setAlert(data.message, 'error'));
    } else {
      data.errors?.map((err: ErrorMessage) => {
        dispatch(setErrorMessage(err));
      });
      dispatch({ type: LOGIN_FAIL });
    }
  }
};
