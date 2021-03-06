import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { NavigationProp } from '@react-navigation/native';
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
import { clearPosts } from '../post/actions';
import { clearUser } from '../user/actions';
import {
  signupSuccess,
  signupFail,
  loginSuccess,
  loginFail,
  setDecodedToken,
  refreshTokenSuccess,
  refreshTokenFail,
  logoutSuccess,
  logoutFail,
} from './actions';
import { authClient } from '../../../api';
import { UserForLogin, UserForSignup } from '../../../interfaces/user';
import { DecodedTokenPayload } from '../../../interfaces/auth';
import { ErrorMessage } from '../../../interfaces/errorMessage';
import { RootState } from '../../../redux';

export const checkEmail = async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
  data: { fullName: string; email: string },
  navigation: NavigationProp<any>,
) => {
  dispatch(setIsEmailValid(false));
  dispatch(setIsEmailInputLoading(true));

  try {
    const { email } = data;

    await authClient.post('auth/check-email', { email });

    dispatch(setIsEmailValid(true));
    dispatch(removeErrorMessages('email'));
    navigation.navigate('SignupStepTwo', { userDetails: data });
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

    dispatch(loginSuccess(data));
    dispatch(setDecodedToken(decodedToken));
  } catch (error) {
    const { status, data } = error.response;
    if (status === 404 || status === 500) {
      const id = uuidv4();
      const alert = { id, message: data.message, typeAlert: 'error' };
      dispatch(setAlert(alert));
    } else {
      data.errors?.map((err: ErrorMessage) => {
        dispatch(setErrorMessage(err));
      });
      dispatch(loginFail());
    }
  } finally {
    dispatch(setIsLoggingIn(false));
  }
};

export const signup = (user: UserForSignup) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
  dispatch(setIsUsernameInputLoading(true));
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

    dispatch(signupSuccess(data));
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
      dispatch(signupFail());
    }
  } finally {
    dispatch(setIsUsernameInputLoading(false));
    dispatch(setIsSigningUp(false));
  }
};

export const refreshToken = async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
  { auth }: RootState,
) => {
  try {
    const { data } = await authClient.post('auth/refresh', {
      userId: auth.decodedToken.userId,
      refreshToken: auth.refreshToken,
    });
    dispatch(refreshTokenSuccess(data.accessToken));
  } catch (error) {
    const { status, data } = error.response;

    if (status === 401 || status === 500) {
      const id = uuidv4();
      const alert = { id, message: data.message, typeAlert: 'error' };
      dispatch(setAlert(alert));
    } else {
      data.errors?.map((err: ErrorMessage) => {
        const id = uuidv4();
        const alert = { id, message: err.msg, typeAlert: 'error' };
        dispatch(setAlert(alert));
      });
    }

    dispatch(refreshTokenFail());
    dispatch(clearPosts());
    dispatch(clearUser());
  }
};

export const logout = (currentRefreshToken: string | null) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
  try {
    await authClient.post('auth/revoke', { refreshToken: currentRefreshToken });
    dispatch(logoutSuccess());
  } catch (error) {
    const { status, data } = error.response;
    dispatch(logoutFail());

    if (status === 500 || status === 401) {
      const id = uuidv4();
      const alert = { id, message: data.message, typeAlert: 'error' };
      dispatch(setAlert(alert));
    }
  } finally {
    dispatch(clearPosts());
    dispatch(clearUser());
  }
};
