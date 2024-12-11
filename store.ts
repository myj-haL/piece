import { configureStore } from '@reduxjs/toolkit';
import portfolioReducer from './src/features/portfolioSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      portfolio: portfolioReducer,
    },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
