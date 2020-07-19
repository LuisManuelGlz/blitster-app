import { combineReducers } from 'redux';

import alert from './alert';
import validation from './validation';
import auth from './auth';

const rootReducer = combineReducers({
  alert,
  validation,
  auth,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
