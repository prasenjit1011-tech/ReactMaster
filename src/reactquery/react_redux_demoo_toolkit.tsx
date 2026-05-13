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
    count: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },

    slno: (state, action: PayloadAction<number>) => {
      state.slno += action.payload;
    },
  },
});

// Store
const store = configureStore({  reducer: counterSlice.reducer });


// RootState
type RootState = ReturnType<typeof store.getState>;
function Counter() {
  const { count, slno } = useSelector(  (state: RootState) => state  );
  return (  <h2>  Count : {count} / Slno : {slno}  </h2>  );
}

function Buttons() {
  const dispatch = useDispatch();
  return (<>
      <button  onClick={() =>  dispatch(counterSlice.actions.count(4))  }  > + </button> &nbsp;
      <button  onClick={() =>  dispatch(counterSlice.actions.slno(3))   }  > + </button>
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