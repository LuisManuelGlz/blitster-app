import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import { auth, alert, validation, post, user } from './ducks';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
  blacklist: ['alert', 'validation', 'post', 'user'],
};

const postPersistConfig = {
  key: 'post',
  storage: AsyncStorage,
  blacklist: ['isFetchingPosts', 'isAddingPost'],
};

const rootReducer = combineReducers({
  alert: alert.reducer,
  auth: auth.reducer,
  validation: validation.reducer,
  post: persistReducer(postPersistConfig, post.reducer),
  user: user.reducer,
});

const middleware = [thunk, createLogger()];

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(...middleware));

let persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export { persistor, store };
