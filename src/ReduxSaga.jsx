import './App.css'


import React, { useEffect } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { takeEvery, put, call, all } from "redux-saga/effects";

/* ---------------- ACTION TYPES ---------------- */

const FETCH_USERS = "FETCH_USERS";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";

/* ---------------- ACTIONS ---------------- */

const fetchUsers = () => ({
  type: FETCH_USERS
});

/* ---------------- REDUCER ---------------- */

const initialState = {
  users: [],
  loading: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        loading: true
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload
      };

    default:
      return state;
  }
}

/* ---------------- API FUNCTION ---------------- */

const fetchUserApi = () =>
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json());

/* ---------------- SAGA ---------------- */

function* fetchUsersSaga() {
  const users = yield call(fetchUserApi);
  yield put({
    type: FETCH_USERS_SUCCESS,
    payload: users
  });
}

function* watchUsers() {
  yield takeEvery(FETCH_USERS, fetchUsersSaga);
}

function* rootSaga() {
  yield all([watchUsers()]);
}

/* ---------------- STORE ---------------- */

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

/* ---------------- REACT COMPONENT ---------------- */

function MainApp() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.slice(0, 3));
  const loading = useSelector(state => state.loading);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const styles = {
    main: {
      padding: "2px 20px"
    },
    title: {
      color: "#5C6AC4",
      marginBottom: "1px"
    }
  };

  return (
    <div style={styles.main}>
      <h1 style={styles.title}>Hello Redux Saga</h1>

      {loading && <p>Loading...</p>}

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- APP WRAPPER ---------------- */

function Demo() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}

export default Demo;