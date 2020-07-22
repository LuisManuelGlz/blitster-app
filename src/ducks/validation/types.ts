import { ErrorMessage } from '../../interfaces/validation';

export const SET_ERROR_MESSAGE = 'Blitster/validation/SET_ERROR_MESSAGE';
export const REMOVE_ERROR_MESSAGES =
  'Blitster/validation/REMOVE_ERROR_MESSAGES';
export const CLEAR_ERROR_MESSAGES = 'Blitster/validation/CLEAR_ERROR_MESSAGES';
export const SET_IS_EMAIL_VALID = 'Blitster/validation/SET_IS_EMAIL_VALID';
export const SET_IS_EMAIL_INPUT_LOADING =
  'Blitster/validation/SET_IS_EMAIL_INPUT_LOADING';
export const SET_IS_USERNAME_INPUT_LOADING =
  'Blitster/validation/SET_IS_USERNAME_INPUT_LOADING';
export const SET_IS_LOGGING_IN = 'Blitster/validation/SET_IS_LOGGING_IN';
export const SET_IS_SIGNING_UP = 'Blitster/validation/SET_IS_SIGNING_UP';

interface SetErrorMessage {
  type: typeof SET_ERROR_MESSAGE;
  errorMessage: ErrorMessage;
}

interface RemoveErrorMessages {
  type: typeof REMOVE_ERROR_MESSAGES;
  param: string;
}

interface ClearErrorMessages {
  type: typeof CLEAR_ERROR_MESSAGES;
}

interface SetIsEmailValid {
  type: typeof SET_IS_EMAIL_VALID;
  isEmailValid: boolean;
}

interface SetIsEmailInputLoading {
  type: typeof SET_IS_EMAIL_INPUT_LOADING;
  isEmailInputLoading: boolean;
}

interface SetIsUsernameInputLoading {
  type: typeof SET_IS_USERNAME_INPUT_LOADING;
  isUsernameInputLoading: boolean;
}

interface SetIsLoggingIn {
  type: typeof SET_IS_LOGGING_IN;
  isLoggingIn: boolean;
}

interface SetIsSigningUp {
  type: typeof SET_IS_SIGNING_UP;
  isSigningUp: boolean;
}

export type ValidationActionTypes =
  | SetErrorMessage
  | RemoveErrorMessages
  | ClearErrorMessages
  | SetIsEmailValid
  | SetIsEmailInputLoading
  | SetIsUsernameInputLoading
  | SetIsLoggingIn
  | SetIsSigningUp;
