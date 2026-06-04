import { useState, useEffect } from "react";

const TodoListApp = () => {
  const [count, setCount] = useState(0);
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const url = "https://jsonplaceholder.typicode.com/todos";
  const url2 = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    // if (count % 2 !== 0) return;

    const controller = new AbortController();

    const fetchTodos = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Error fetching data");
        }

        const data = await response.json();
        setTodoList(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err);
          setError('Error fetching todos');
          throw new Error("Failed to fetch todos");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();

    // ✅ CLEANUP → clears memory
    return () => {
      controller.abort();
      setTodoList([]);   // ✅ clear data
      setLoading(false); // ✅ reset state
      setError(null);    // ✅ reset error
    };
  }, [count]);

  return (
    <div style={styles.main}>
      <h1 style={styles.title}>Todo App</h1>

      <button onClick={() => setCount((prev) => prev + 1)}>
        Refresh Todos ({count})
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul style={styles.list}>
        {
        todoList.slice(0, 10).map((todo) => (
          <li
            key={todo.id}
            style={{
              backgroundColor: todo.id % 2 === 0 ? "#f2f2f2" : "#dfe6ff",
              padding: "8px",
              marginBottom: "4px",
              borderRadius: "4px",
              textAlign: "left",
            }}
          >
            {todo.title.slice(0, 10)}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  main: {
    padding: "20px",
    fontFamily: "Arial",
  },
  title: {
    color: "#5C6AC4",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
};

export default TodoListApp;