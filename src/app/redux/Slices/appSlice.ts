import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PickState {
  value: number;
  chain1: number;
  chain2: number;
  transpose: boolean;
  showModal: boolean;
  showModal2: boolean;
  enabled: boolean;
  isOpen: boolean;
}

const initialState: PickState = {
  value: 0,
  chain1: 0,
  chain2: 1,
  enabled: false,
  transpose: false,
  showModal: false,
  showModal2: false,
  isOpen: false,
};

export const closeAndHideModal = createAction<void>("closeAndHideModal");

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    changePick: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    setChain1: (state, action: PayloadAction<number>) => {
      state.chain1 = action.payload;
    },
    setChain2: (state, action: PayloadAction<number>) => {
      state.chain2 = action.payload;
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
    setShowModal2: (state, action: PayloadAction<boolean>) => {
      state.showModal2 = action.payload;
    },
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const {
  changePick,
  setChain1,
  setChain2,
  setTranspose,
  setShowModal,
  setShowModal2,
  setIsOpen,
  setEnabled,
} = appSlice.actions;

export default appSlice.reducer;
