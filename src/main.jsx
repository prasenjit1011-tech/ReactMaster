import React, { memo, useCallback } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { FixedSizeList as List } from "react-window";

// ----------------------
// API (Abort supported)
// ----------------------
const url1 = "https://jsonplaceholder.typicode.com/users";
const url2 = "https://dummyjson.com/products";
const fetchProducts = async (signal) => {
  const res = await fetch(url2, {
    signal,
  });
  if(!res.ok){
    return;
  }
  const userData = await res.json();
  console.log(res.data);
  return userData.products;
};

// ----------------------
// Row Component (Virtualized)
// ----------------------
const Row = memo(({ index, style, data }) => {
  const item = data[index];

  return (
    <div style={style}>
      #{item.id} :::: {item.title}
    </div>
  );
});

// ----------------------
// Main Component
// ----------------------
function App() {
  const { data = [], isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: ({ signal }) => fetchProducts(signal),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });

  const renderRow = useCallback(
    (props) => <Row {...props} />,
    []
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Product List</h2>
      {
        data.map((item) => {
          return <p key={item.id}>{item.id} :::: {item.title}</p>;
        })
      }
      <hr />
      <List
        height={500}
        width={"100%"}
        itemCount={data.length}
        itemSize={50}
        itemData={data}
      >
        {renderRow}
      </List>
    </div>
  );
}

// ----------------------
// React Query Setup
// ----------------------
const queryClient = new QueryClient();

// ----------------------
// Render
// ----------------------
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);