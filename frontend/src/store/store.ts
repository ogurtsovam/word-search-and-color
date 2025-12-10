import { configureStore } from '@reduxjs/toolkit';

import activeInputReducer from "../slices/activeInputSlice"
import activeRulesReducer from "../slices/activeRulesSlice";

export const store = configureStore({
  reducer: {
    activeInput: activeInputReducer,
    activeRules: activeRulesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;