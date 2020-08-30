import { UserActionTypes, SET_USER, CLEAR_USER } from './types';
import { User } from '../../../interfaces/user';

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

export default (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case CLEAR_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
