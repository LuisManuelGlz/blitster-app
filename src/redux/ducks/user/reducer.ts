import { UserActionTypes, SET_PROFILE, CLEAR_PROFILE } from './types';
import { User } from '../../../interfaces/user';

interface UserState {
  profile: User | null;
}

const initialState: UserState = {
  profile: null,
};

export default (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
      };
    default:
      return state;
  }
};
