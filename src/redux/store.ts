import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
// import rootReducer from '.';
import { jwt } from './middlewares';
import { auth, validation, alert } from './ducks';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['auth', 'alert', 'validation'],
};

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  blacklist: ['refreshingToken'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, auth.reducer),
  validation: validation.reducer,
  alert: alert.reducer,
});

const middleware = [jwt, thunk, createLogger()];

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(...middleware));

let persistor = persistStore(store);

export { persistor, store };
