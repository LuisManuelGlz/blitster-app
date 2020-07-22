import { combineReducers } from 'redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { alert, validation, auth } from '../ducks';

const rootReducer = combineReducers({
  alert: alert.reducer,
  validation: validation.reducer,
  auth: auth.reducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
