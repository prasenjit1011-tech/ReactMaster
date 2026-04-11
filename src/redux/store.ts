import { configureStore } from "@reduxjs/toolkit";
import clickCntReducer from "./slices/clickCntSlice";

export const store = configureStore({
  reducer: {
    clickCnt: clickCntReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
