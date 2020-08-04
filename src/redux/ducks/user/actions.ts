import { ThunkDispatch } from 'redux-thunk';
import { UserActionTypes, SET_PROFILE, CLEAR_PROFILE } from './types';
import { User } from '../../../interfaces/user';

export const setProfile = (profile: User) => (
  dispatch: ThunkDispatch<{}, {}, UserActionTypes>,
) => {
  dispatch({
    type: SET_PROFILE,
    profile,
  });
};

export const clearProfile = () => (
  dispatch: ThunkDispatch<{}, {}, UserActionTypes>,
) => {
  dispatch({
    type: CLEAR_PROFILE,
  });
};
