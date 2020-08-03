import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_DECODED_TOKEN,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
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
  refreshingToken: boolean | null;
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
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
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
      return {
        ...state,
        accessToken: action.refreshToken,
        refreshToken: action.refreshToken,
      };
    case SIGNUP_FAIL:
    case LOGIN_FAIL:
    case REFRESH_TOKEN_FAIL:
    case LOGOUT_SUCCESS:
    case LOGOUT_FAIL:
    case AUTH_ERROR:
      return {
        ...initialState,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
