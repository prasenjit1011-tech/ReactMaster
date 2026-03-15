import React, { useEffect } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";

const styles = {
    main: {
      padding: "2px 20px"
    },
    title: {
      color: "#5C6AC4",
      marginBottom: "1px"
    }
  };

/* ACTION TYPES */
const GET_USERS = "GET_USERS";
const SET_USERS = "SET_USERS";

/* REDUCER */
const initialState = {
  users: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}

/* SAGA */
function* getUsersSaga() {
  const res = yield fetch("https://jsonplaceholder.typicode.com/todos");
  const data = yield res.json();

  yield put({
    type: SET_USERS,
    payload: data.slice(0,2)
  });
}

/* WATCHER */
function* rootSaga() {
  yield takeEvery(GET_USERS, getUsersSaga);
}

/* STORE */
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

/* COMPONENT */
function Main() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch({ type: GET_USERS });
  }, [dispatch]);

  return (
    <div style={styles.main}>
      <h1 style={styles.title}>Redux Saga</h1>

      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* APP */
function DemoUser() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default DemoUser;