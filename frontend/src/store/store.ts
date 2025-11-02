import { configureStore } from '@reduxjs/toolkit';

import activeInputReducer from "../slices/activeInputSlice"

export const store = configureStore({
  reducer: {
    activeInput: activeInputReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;