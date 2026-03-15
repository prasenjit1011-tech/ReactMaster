import React, { useEffect } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";

import { createEpicMiddleware, ofType } from "redux-observable";
import { mergeMap, map } from "rxjs/operators";
import { from } from "rxjs";

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

/* EPIC (Redux Observable) */

const getUsersEpic = (action$) =>
    action$.pipe(
        ofType(GET_USERS),
        mergeMap(() =>
            from(fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json()))
            .pipe(
                map(data => ({
                    type: SET_USERS,
                    payload: data.slice(0,3)
                }))
            )
        )
    );

/* STORE */

const epicMiddleware = createEpicMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(epicMiddleware)
);

epicMiddleware.run(getUsersEpic);

/* COMPONENT */

function UsersList() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    useEffect(() => {
        dispatch({ type: GET_USERS });
    }, [dispatch]);

    return (
        <div style={styles.main}>
            <h1 style={styles.title}>Redux-Observable: UsersList</h1>
            <ul>
                {users.map((u) => (
                    <li key={u.id}>{u.title}</li>
                ))}
            </ul>
        </div>
    );
}

/* APP */

function ReduxObservable() {
  return (
    <Provider store={store}>
      <UsersList />
    </Provider>
  );
}

export default ReduxObservable;