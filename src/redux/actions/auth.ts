import { Dispatch, AnyAction } from 'redux';
import { LOGIN_SUCCESS, LOGIN_FAIL } from './actionTypes';
import authClient from '../../api/authClient';
import { UserForLogin } from '../../interfaces/user';

export const login = (user: UserForLogin) => async (
  dispatch: Dispatch<AnyAction>,
) => {
  try {
    const res = await authClient.post('login', user);
    console.log(res.data);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: LOGIN_FAIL });
  }
};
