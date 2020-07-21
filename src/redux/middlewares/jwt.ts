import { ThunkMiddleware } from 'redux-thunk';
import { authRefreshToken } from '../actions/auth';

export const jwtMiddleware: ThunkMiddleware<any> = ({ dispatch, getState }) => (
  next,
) => async (action) => {
  if (typeof action === 'object') {
    let state = await getState();

    if (state.auth.accessToken && isExpired(state.auth.expiresIn)) {
      if (!state.auth.isRefreshingToken) {
        try {
          dispatch(
            authRefreshToken({
              userId: state.auth.user.userId,
              refreshToken: state.auth.refreshToken,
            }),
          );
        } finally {
          return next(action);
        }
      } else {
        return next(action);
      }
    }
  }
  return next(action);
};

function isExpired(expirationDate: number) {
  let currentTime = new Date();
  let expires_date = new Date(expirationDate);
  return currentTime > expires_date;
}
