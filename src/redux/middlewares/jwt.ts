import 'react-native-get-random-values';
import jwtDecode from 'jwt-decode';
import { ThunkMiddleware } from 'redux-thunk';
import { auth } from '../ducks';
import { DecodedTokenPayload } from '../../interfaces/auth';
import { RootState } from '..';

export const jwtMiddleware: ThunkMiddleware<RootState> = ({
  dispatch,
  getState,
}) => (next) => (action) => {
  console.log(`\n\n\n ${JSON.stringify(action)} \n\n\n`);
  if (typeof action === 'function') {
    let state = getState();
    console.log(`\n\n\n STATE:\n ${JSON.stringify(state)} \n\n\n`);

    if (state.auth.accessToken && isExpired(state.auth.accessToken)) {
      if (!state.auth.refreshingToken) {
        auth.operations
          .authRefreshToken(dispatch, state)
          .then(() => next(action));
      } else {
        return auth.operations.authRefreshToken.then(() => next(action));
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
