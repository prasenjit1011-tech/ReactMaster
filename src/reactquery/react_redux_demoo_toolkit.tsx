import ReactDOM from "react-dom/client";
import { Provider, useSelector, useDispatch } from "react-redux";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types
type StateType = {  count: number;  slno: number;};

// Slice
const initialStateObj: StateType = { count: 95, slno: 9 };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialStateObj,
  reducers: {
    updData: (state, action: PayloadAction<{ key: keyof StateType; val: number }>) => {
      state[action.payload.key] += action.payload.val;
    },
    count: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    slno: (state, action: PayloadAction<number>) => {
      state.slno += action.payload;
    },
  },
});

// Store & RootState
const store     = configureStore({  reducer: counterSlice.reducer });
type RootState  = ReturnType<typeof store.getState>;
function Counter() {
  const { count, slno } = useSelector(  (state: RootState) => state  );
  return (  <h2>  Count : {count} / Slno : {slno}  </h2>  );
}

function Buttons() {
  const dispatch = useDispatch();
  return (<>
      <button  onClick={() =>  dispatch(counterSlice.actions.count(4))  }  >count : + </button> &nbsp;
      <button  onClick={() =>  dispatch(counterSlice.actions.slno(3))   }  >slno : + </button> &nbsp;

      <button  onClick={() =>  dispatch(counterSlice.actions.updData({ key: "count", val: 6 }))  }  >updData_count: + </button> &nbsp;
      <button  onClick={() =>  dispatch(counterSlice.actions.updData({ key: "slno", val: 9 }))  }  >updData_slno: + </button> &nbsp;
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <Counter />
    <Buttons />
  </Provider>
);