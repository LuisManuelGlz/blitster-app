import { ThunkDispatch } from 'redux-thunk';
import { UserActionTypes, SET_USER, CLEAR_USER } from './types';
import { User } from '../../../interfaces/user';

export const setUser = (user: User) => (
  dispatch: ThunkDispatch<{}, {}, UserActionTypes>,
) => {
  dispatch({
    type: SET_USER,
    user,
  });
};

export const clearUser = () => (
  dispatch: ThunkDispatch<{}, {}, UserActionTypes>,
) => {
  dispatch({
    type: CLEAR_USER,
  });
};
