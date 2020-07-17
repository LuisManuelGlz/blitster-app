import { combineReducers } from 'redux';

import alert from './alert';
import errorMessage from './errorMessage';
import auth from './auth';

const rootReducer = combineReducers({
  alert,
  errorMessage,
  auth,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
