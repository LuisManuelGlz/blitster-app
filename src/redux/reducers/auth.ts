import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  // LOGIN_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../actions/actionTypes';

const initialState = {
  tokenType: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: null,
  expiresIn: null,
};

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

export default (state = initialState, action: Action) => {
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
