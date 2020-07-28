import { combineReducers } from 'redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { alert, validation, auth, post } from './ducks';

const rootReducer = combineReducers({
  alert: alert.reducer,
  validation: validation.reducer,
  auth: auth.reducer,
  post: post.reducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
