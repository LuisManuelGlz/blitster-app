import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { LOGIN_SUCCESS, LOGIN_FAIL, CLEAR_ALERTS } from './actionTypes';
import { setAlert } from './alert';
import authClient from '../../api/authClient';
import { UserForLogin } from '../../interfaces/user';

export const checkEmail = (email: string) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
  try {
    await authClient.post('check-email', { email });
  } catch (error) {
    const { errors } = error.response.data;

    dispatch({ type: CLEAR_ALERTS });
    errors.map((err: { msg: string }) => dispatch(setAlert(err.msg, 'Error')));
  }
};

export const login = (user: UserForLogin) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
  try {
    const res = await authClient.post('login', user);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    const { errors } = error.response.data;

    dispatch({ type: CLEAR_ALERTS });
    errors.map((err: { msg: string }) => dispatch(setAlert(err.msg, 'Error')));
    dispatch({ type: LOGIN_FAIL });
  }
};
