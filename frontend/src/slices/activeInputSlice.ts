import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';

interface ActiveInputState {
  activeInput: string | null;
}

const initialState: ActiveInputState = {
  activeInput: null,
}

const activeInputSlice = createSlice({
  name: 'activeInput',
  initialState,
  reducers: {
    setActiveInput: (state, action: PayloadAction<string | null>) => {
      state.activeInput = action.payload;
    },
  },
})

export const { setActiveInput } = activeInputSlice.actions;
export default activeInputSlice.reducer;

export const selectActiveInput = (state: RootState) =>
  state.activeInput.activeInput;