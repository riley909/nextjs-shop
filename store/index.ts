import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { Context, createWrapper, MakeStore } from 'next-redux-wrapper';
import rootReducer from './slices';

const devMode = process.env.NODE_ENV === 'development';

const store = configureStore({
  rootReducer,
  devTools: devMode,
});

const setupStore = (ctx: any): EnhancedStore => store;
const makeStore: MakeStore<RootState> = (ctx: Context) => setupStore(ctx);

const wrapper = createWrapper(makeStore, {
  debug: devMode,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default wrapper;
