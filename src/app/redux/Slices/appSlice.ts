import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PickState {
  value: number;
  enabled: boolean;
  transpose: boolean;
  showModal: boolean;
  chain1: number;
  chain2: number;
}

const initialState: PickState = {
  value: 0,
  enabled: false,
  transpose: false,
  showModal: false,
  chain1: 0,
  chain2: 1,
};

export const closeAndHideModal = createAction<void>("closeAndHideModal");

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    changePick: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    setEnabled: (state, action: PayloadAction<boolean>) => {
      state.enabled = action.payload;
    },
    setTranspose: (state, action: PayloadAction<boolean>) => {
      state.transpose = action.payload;
    },
    setShowModal: (state, action: PayloadAction<boolean>) => {
      state.showModal = action.payload;
    },
    setChain1: (state, action: PayloadAction<number>) => {
      state.chain1 = action.payload;
    },
    setChain2: (state, action: PayloadAction<number>) => {
      state.chain1 = action.payload;
    },
  },
});

export const {
  changePick,
  setEnabled,
  setTranspose,
  setShowModal,
  setChain1,
  setChain2,
} = appSlice.actions;

export default appSlice.reducer;
