import { Profile } from '../../../interfaces/profile';

export const SET_PROFILE = 'Blitster/auth/SET_PROFILE';
export const CLEAR_PROFILE = 'Blitster/auth/CLEAR_PROFILE';

interface SetProfile {
  type: typeof SET_PROFILE;
  profile: Profile;
}

interface ClearProfile {
  type: typeof CLEAR_PROFILE;
}

export type UserActionTypes = SetProfile | ClearProfile;
