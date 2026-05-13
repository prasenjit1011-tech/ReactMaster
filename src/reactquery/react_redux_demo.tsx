import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

// Types
type StateType  = {  count: number;           slno: number;};
type ActionType = {  type: keyof StateType;   val: number;};

// Store
const obj: StateType = { count: 95, slno: 9 };
const store = createStore(
  (state: StateType = obj, action: ActionType): StateType => {
    state[action.type] += action.val;
    return { ...state };
  }
);

function Counter() {
  const { count, slno } = useSelector((state: StateType) => state);
  return (<h2>Count : {count} / Slno : {slno}</h2>);
}

function Buttons() {
  const dispatch = useDispatch();

  return (<>
      <button onClick={() => dispatch({ type: "count", val: 4 })}>+</button> &nbsp;
      <button onClick={() => dispatch({ type: "slno", val: 3 })}>+</button>
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