import { configureStore } from "@reduxjs/toolkit";
import clickCntReducer from "./slices/clickCntSlice";

const reducer = {
  clickCnt: clickCntReducer,
};
export const store = configureStore({
  reducer: reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
