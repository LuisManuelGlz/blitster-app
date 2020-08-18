import { UserActionTypes, SET_PROFILE, CLEAR_PROFILE } from './types';
import { Profile } from '../../../interfaces/profile';

interface UserState {
  profile: Profile | null;
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
