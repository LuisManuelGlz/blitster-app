import 'react-native-get-random-values';
import jwtDecode from 'jwt-decode';
import { ThunkMiddleware } from 'redux-thunk';
import { auth } from '../ducks';
import { INVALID_TOKEN } from '../ducks/auth/types';
import { DecodedTokenPayload } from '../../interfaces/auth';
import { RootState } from '..';

export const jwtMiddleware: ThunkMiddleware<RootState> = ({
  dispatch,
  getState,
}) => (next) => async (action) => {
  if (action.type === INVALID_TOKEN) {
    let state = getState();

    if (
      state.auth &&
      state.auth.accessToken &&
      isExpired(state.auth.accessToken)
    ) {
      if (!state.auth.refreshingToken) {
        await dispatch(
          auth.operations.authRefreshToken({
            userId: state.auth.decodedToken.userId!,
            refreshToken: state.auth.refreshToken!,
          }),
        );

        return next(action);
      } else {
        return next(action);
      }
    }
  }
  return next(action);
};

function isExpired(accessToken: string | null) {
  if (!accessToken) {
    return false;
  }

  const decoded = jwtDecode<DecodedTokenPayload>(accessToken);
  let currentTime = new Date();
  let expires_date = new Date(decoded.exp * 1000);
  return currentTime > expires_date;
}
