import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';
import type { Rule } from "../library/baseLibrary";

interface ActiveRulesState {
  activeRules: Rule[];
}

const initialState: ActiveRulesState = {
  activeRules: [],
}

const activeRulesSlice = createSlice({
  name: 'activeRules',
  initialState,
  reducers: {
    setActiveRules: (state, action: PayloadAction<Rule[]>) => {
      state.activeRules = action.payload;
    },
  },
})

export const { setActiveRules } = activeRulesSlice.actions;
export default activeRulesSlice.reducer;

export const selectActiveRules = (state: RootState) =>
  state.activeRules.activeRules;