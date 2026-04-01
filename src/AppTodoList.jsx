import React, { Suspense, useState } from "react";

// wrapPromise
function wrapPromise(promise) {
  let status = "pending";
  let result;

  const suspender = promise.then(
    (res) => {
      status = "success";
      result = res;
    },
    (err) => {
      status = "error";
      result = err;
    }
  );

  return {
    read() {
      if (status === "pending") throw suspender;
      if (status === "error") throw result;
      return result;
    },
  };
}

// create resource
function createTodoResource() {
  const promise = fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json());

  return wrapPromise(promise);
}

// Error Boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h2>Error loading todos</h2>;
    }

    return this.props.children;
  }
}

// Todo List
function TodoList({ resource }) {
  const todos = resource.read();

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.slice(0, 20).map((todo, index) => (
        <li
          key={todo.id}
          style={{
            background: index % 2 === 0 ? "#f2f2f2" : "#dfe6ff",
            padding: "8px",
            marginBottom: "5px",
            borderRadius: "4px",
          }}
        >
          {todo.id}) {todo.title}
        </li>
      ))}
    </ul>
  );
}

// App
export function AppTodoList() {
  const [resource, setResource] = useState(createTodoResource());

  const refreshTodos = () => {
    setResource(createTodoResource());
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Suspense Todo App</h1>

      <button
        onClick={refreshTodos}
        style={{
          padding: "10px",
          marginBottom: "20px",
          cursor: "pointer",
        }}
      >
        Refresh Todos
      </button>

      <ErrorBoundary>
        <Suspense fallback={<h2>Loading...</h2>}>
          <TodoList resource={resource} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}