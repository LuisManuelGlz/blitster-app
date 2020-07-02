import {
  // SIGNUP_SUCCESS,
  // SIGNUP_FAIL,
  // LOGIN_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  // LOGOUT,
} from '../actions/actionTypes';

const initialState = {
  tokenType: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: null,
};

interface Payload {
  tokenType: string;
  accessToken: string;
  refreshToken: string;
}

interface Action {
  type: string;
  payload?: Payload;
}

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
