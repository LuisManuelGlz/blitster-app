import { combineReducers } from 'redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { alertReducer } from './alert';
import { validationReducer } from './validation';
import { authReducer } from './auth';

const rootReducer = combineReducers({
  alert: alertReducer,
  validation: validationReducer,
  auth: authReducer,
});

interface RootState {
  alert: ReturnType<typeof alertReducer>;
  validation: ReturnType<typeof validationReducer>;
  auth: ReturnType<typeof authReducer>;
}

export default rootReducer;

// export type RootState = ReturnType<typeof rootReducer>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
