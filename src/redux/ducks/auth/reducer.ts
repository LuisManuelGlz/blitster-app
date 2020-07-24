import {
  SET_AUTH,
  SET_DECODED_TOKEN,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAIL,
  SET_REFRESHING_TOKEN,
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
  refreshingToken: Promise<void> | null;
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
  refreshingToken: null,
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
    case REFRESH_TOKEN_SUCCESS:
    case REFRESH_TOKEN_FAIL:
      return {
        ...state,
        refreshingToken: null,
      };
    case SET_REFRESHING_TOKEN:
      return {
        ...state,
        refreshingToken: action.refreshingToken,
      };
    case SET_REFRESH_TOKEN:
      return {
        ...state,
        accessToken: action.refreshToken,
        refreshToken: action.refreshToken,
      };
    case LOGOUT:
    case AUTH_ERROR:
      return {
        ...initialState,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
