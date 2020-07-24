import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import jwtDecode from 'jwt-decode';
import {
  setErrorMessage,
  removeErrorMessages,
  clearErrorMessages,
  setIsEmailValid,
  setIsEmailInputLoading,
  setIsUsernameInputLoading,
  setIsLoggingIn,
  setIsSigningUp,
} from '../validation/actions';
import { setAlert } from '../alert/actions';
import {
  setAuth,
  authError,
  // refreshTokenSuccess,
  // refreshTokenFail,
  setDecodedToken,
  setRefreshingToken,
  setRefreshToken,
} from './actions';
import { authClient } from '../../../api';
import { UserForLogin, UserForSignup } from '../../../interfaces/user';
import { DecodedTokenPayload } from '../../../interfaces/auth';
import { ErrorMessage } from '../../../interfaces/errorMessage';
import { RootState } from '../..';

export const checkEmail = (email: string) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
  dispatch(setIsEmailValid(false));
  dispatch(setIsEmailInputLoading(true));

  try {
    await authClient.post('auth/check-email', {
      email,
    });

    dispatch(setIsEmailValid(true));
    dispatch(removeErrorMessages('email'));
  } catch (error) {
    const { errors } = error.response.data;

    dispatch(setIsEmailValid(false));
    dispatch(removeErrorMessages('email'));

    errors?.map((err: ErrorMessage) => {
      dispatch(setErrorMessage(err));
    });
  } finally {
    dispatch(setIsEmailInputLoading(false));
  }
};

export const checkUsername = (username: string) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
  dispatch(setIsUsernameInputLoading(true));

  try {
    await authClient.post('auth/check-username', { username });
    dispatch(removeErrorMessages('username'));
  } catch (error) {
    const { errors } = error.response.data;

    dispatch(removeErrorMessages('username'));

    errors?.map((err: ErrorMessage) => {
      dispatch(setErrorMessage(err));
    });
  } finally {
    dispatch(setIsUsernameInputLoading(false));
  }
};

export const login = (user: UserForLogin) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
  dispatch(setIsLoggingIn(true));
  dispatch(clearErrorMessages());

  try {
    const { data } = await authClient.post('auth/login', user);
    const decoded = jwtDecode<DecodedTokenPayload>(data.accessToken);

    const decodedToken = {
      userId: decoded._id,
      username: decoded.username,
      role: decoded.role,
      isVerified: decoded.isVerified,
    };

    dispatch(setAuth(data));
    dispatch(setDecodedToken(decodedToken));
  } catch (error) {
    console.log(`\n\n\n ERROR: ${JSON.stringify(error.response)} \n\n\n`);
    const { status, data } = error.response;
    if (status === 404 || status === 500) {
      const id = uuidv4();
      const alert = { id, message: data.message, typeAlert: 'error' };
      dispatch(setAlert(alert));
    } else {
      data.errors?.map((err: ErrorMessage) => {
        dispatch(setErrorMessage(err));
      });
      dispatch(authError());
    }
  } finally {
    dispatch(setIsLoggingIn(false));
  }
};

export const signup = (user: UserForSignup) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
  dispatch(setIsSigningUp(true));
  dispatch(clearErrorMessages());

  try {
    const { data } = await authClient.post('auth/signup', user);
    const decoded = jwtDecode<DecodedTokenPayload>(data.accessToken);

    const decodedToken = {
      userId: decoded._id,
      username: decoded.username,
      role: decoded.role,
      isVerified: decoded.isVerified,
    };

    dispatch(setAuth(data));
    dispatch(setDecodedToken(decodedToken));
  } catch (error) {
    const { status, data } = error.response;

    if (status === 500) {
      const id = uuidv4();
      const alert = { id, message: data.message, typeAlert: 'error' };
      dispatch(setAlert(alert));
    } else {
      data.errors?.map((err: ErrorMessage) => {
        dispatch(setErrorMessage(err));
      });
      dispatch(authError());
    }
  } finally {
    dispatch(setIsSigningUp(false));
  }
};

// export const authRefreshToken = async (
//   dispatch: ThunkDispatch<{}, {}, AnyAction>,
//   { auth }: RootState,
// ) => {
//   setRefreshingToken(true);
//   console.log(
//     `\n\n\n FRESHING: ${auth.decodedToken.userId} ${auth.refreshToken} \n\n\n`,
//   );

//   try {
//     const { data } = await authClient.post('auth/refresh', {
//       userId: auth.decodedToken.userId,
//       refreshToken: auth.refreshToken,
//     });
//     dispatch(setRefreshToken(data.accessToken));
//   } catch (error) {
//     const { status, data } = error.response;

//     if (status === 401 || status === 500) {
//       const id = uuidv4();
//       const alert = { id, message: data.message, typeAlert: 'error' };
//       dispatch(setAlert(alert));
//       console.log(`\n\n\n ALERT: ${JSON.stringify(alert)} \n\n\n`);
//     } else {
//       data.errors?.map((err: ErrorMessage) => {
//         const id = uuidv4();
//         const alert = { id, message: err.msg, typeAlert: 'error' };
//         dispatch(setAlert(alert));
//       });
//     }

//     dispatch(authError());
//   } finally {
//     setRefreshingToken(false);
//   }
// };

export const authRefreshToken = (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
  { auth }: RootState,
) => {
  console.log(
    `\n\n\n FRESHING: ${auth.decodedToken.userId} ${auth.refreshToken} \n\n\n`,
  );
  let isFulfilled = false;

  const refreshTokenPromise = authClient
    .post('auth/refresh', {
      userId: auth.decodedToken.userId,
      refreshToken: auth.refreshToken,
    })
    .then((data) => {
      dispatch(setRefreshToken(data.accessToken));
      isFulfilled = true;
    })
    .catch((error) => {
      const { status, data } = error.response;

      if (status === 401 || status === 500) {
        const id = uuidv4();
        const alert = { id, message: data.message, typeAlert: 'error' };
        dispatch(setAlert(alert));
        console.log(`\n\n\n ALERT: ${JSON.stringify(alert)} \n\n\n`);
      } else {
        data.errors?.map((err: ErrorMessage) => {
          const id = uuidv4();
          const alert = { id, message: err.msg, typeAlert: 'error' };
          dispatch(setAlert(alert));
        });
      }
      dispatch(authError());
      isFulfilled = true;
    });

  dispatch(setRefreshingToken(isFulfilled ? null : refreshTokenPromise));

  return refreshTokenPromise;
};
