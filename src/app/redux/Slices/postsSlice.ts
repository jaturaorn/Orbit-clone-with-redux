import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PickState {
  value: number;
}

const initialState: PickState = {
  value: 1,
};

const appSlice = createSlice({
  name: "pick",
  initialState,
  reducers: {
    setPick: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setPick } = appSlice.actions;
export default appSlice.reducer;
