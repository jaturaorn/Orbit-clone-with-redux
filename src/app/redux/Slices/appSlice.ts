import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PickState {
  value: number;
}

const initialState: PickState = {
  value: 0,
};

const appSlice = createSlice({
  name: "pick",
  initialState,
  reducers: {
    changePick: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { changePick } = appSlice.actions;
export default appSlice.reducer;
