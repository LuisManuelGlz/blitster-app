import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  // LOGIN_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../actions/actionTypes';

interface Payload {
  tokenType: string;
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
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
}

const initialState: AuthState = {
  tokenType: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: null,
  expiresIn: null,
};

export const authReducer = (
  state = initialState,
  action: Action,
): AuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };
    case LOGIN_FAIL:
    case SIGNUP_FAIL:
    case LOGOUT:
      return {
        tokenType: null,
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false,
        expiresIn: null,
      };
    default:
      return state;
  }
};
