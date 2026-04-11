import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ClickCntState {
  count: number;
}

const initialState: ClickCntState = {
  count: 0,
};

const clickCntSlice = createSlice({
  name: "clickCnt",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});

export const { increment, decrement, reset, setCount } = clickCntSlice.actions;
export default clickCntSlice.reducer;
