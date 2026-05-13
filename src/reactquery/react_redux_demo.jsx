import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

// Store
const obj   = {count:55, slno:9}
const store = createStore((state = obj, action) => {state[action.type] += action.val;return {...state}});

function Counter() {
  const {count, slno} = useSelector((state) => state);
  return (<h2>Count : {count} / Slno : {slno}</h2>);
}

function Buttons() {
  const dispatch = useDispatch();
  return (<>
    <button onClick={() => dispatch({ type: "count", val:1 })}>+</button> &nbsp;
    <button onClick={() => dispatch({ type: "slno", val:2 })}>+</button>
  </>);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Counter />
    <Buttons />
  </Provider>
);