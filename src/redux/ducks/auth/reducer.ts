import {
  SET_AUTH,
  SET_DECODED_TOKEN,
  SET_IS_REFRESHING_TOKEN,
  SET_REFRESH_TOKEN,
  LOGOUT,
  AUTH_ERROR,
  AuthActionTypes,
} from './types';
import { DecodedToken } from '../../../interfaces/auth';

interface AuthState {
  tokenType: string | null;
  accessToken: string | null;
  refreshToken: string | null;
  expiresIn: number | null;
  isAuthenticated: boolean | null;
  decodedToken: DecodedToken;
  isRefreshingToken: boolean | null;
}

const initialState: AuthState = {
  tokenType: null,
  accessToken: null,
  refreshToken: null,
  expiresIn: null,
  isAuthenticated: null,
  decodedToken: {
    userId: null,
    username: null,
    role: null,
    isVerified: null,
  },
  isRefreshingToken: null,
};

export default (state = initialState, action: AuthActionTypes) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        ...action.auth,
        isAuthenticated: true,
      };
    case SET_DECODED_TOKEN:
      return {
        ...state,
        decodedToken: action.decodedToken,
      };
    case SET_IS_REFRESHING_TOKEN:
      return {
        ...state,
        isRefreshingToken: action.isRefreshingToken,
      };
    case SET_REFRESH_TOKEN:
      return {
        ...state,
        refreshToken: action.refreshToken,
      };
    case LOGOUT:
      return {
        ...initialState,
        isAuthenticated: false,
      };
    case AUTH_ERROR:
      return {
        ...initialState,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
