import { User } from '../../../interfaces/user';

export const SET_USER = 'Blitster/auth/SET_USER';
export const CLEAR_USER = 'Blitster/auth/CLEAR_USER';

interface SetUser {
  type: typeof SET_USER;
  user: User;
}

interface ClearUser {
  type: typeof CLEAR_USER;
}

export type UserActionTypes = SetUser | ClearUser;
