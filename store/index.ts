import { AnyAction, configureStore, EnhancedStore, Reducer } from '@reduxjs/toolkit';
import { Context, createWrapper } from 'next-redux-wrapper';
import { USER_KEY } from '../pages/login';
import rootReducer, { IState } from './slices';
import LocalStorage from '../utils/LocalStorage';

const devMode = process.env.NODE_ENV === 'development';

const user = JSON.parse(LocalStorage.getItem(USER_KEY)!);
const isLoggedIn = user ? true : false;

const store = configureStore({
  reducer: rootReducer as Reducer<IState, AnyAction>,
  devTools: devMode,
  preloadedState: { users: { isLoggedIn, username: user ? user.ID : null } },
});

const setupStore = (ctx: any): EnhancedStore => store;
const makeStore = (ctx: Context) => setupStore(ctx);

const wrapper = createWrapper(makeStore, {
  debug: devMode,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default wrapper;
