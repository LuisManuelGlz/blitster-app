import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  REFRESHING_TOKEN,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAIL,
} from '../actions/actionTypes';

interface User {
  userId: string | null;
  username: string | null;
  role: string | null;
  isVerified: boolean | null;
}

interface Payload {
  tokenType: string;
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  user: User;
  isRefreshingToken: boolean;
}

interface Action {
  type: string;
  payload?: Payload;
}

interface AuthState {
  tokenType: string | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean | null;
  expiresIn: number | null;
  user: User;
  isRefreshingToken: boolean | null;
}

const initialState: AuthState = {
  tokenType: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: null,
  expiresIn: null,
  user: {
    userId: null,
    username: null,
    role: null,
    isVerified: null,
  },
  isRefreshingToken: null,
};

export const authReducer = (
  state = initialState,
  action: Action,
): AuthState => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
      };
    case USER_LOADED:
      return {
        ...state,
        user: payload!.user,
      };
    case REFRESHING_TOKEN:
      return {
        ...state,
        isRefreshingToken: payload!.isRefreshingToken,
      };
    case REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        ...payload,
        refreshToken: payload!.accessToken,
        isAuthenticated: true,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case SIGNUP_FAIL:
    case LOGOUT:
    case REFRESH_TOKEN_FAIL:
      return {
        ...state,
        tokenType: null,
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false,
        expiresIn: null,
        user: {
          userId: null,
          username: null,
          role: null,
          isVerified: null,
        },
      };
    default:
      return state;
  }
};
