import React, {
  useState,
  useMemo,
  useCallback,
  Suspense,
  lazy
} from "react";
import ReactDOM from "react-dom/client";
import {
  QueryClient,
  QueryClientProvider,
  useQuery
} from "@tanstack/react-query";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";

// ============================
// Types
// ============================
type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

// ============================
// Query Client
// ============================
const queryClient = new QueryClient();

// ============================
// Styles
// ============================
const style: Record<string, React.CSSProperties> = {
  parent: { border: "1px solid #F00", padding: 10 },
  child: { border: "1px solid #00F", marginTop: 10 },
  title: { textAlign: "center" },
  input: { padding: 5, width: "200px" }
};

// ============================
// Custom Hook
// ============================
const usePhotos = () => {
  return useQuery<Photo[], Error>({
    queryKey: ["photos"],
    queryFn: async () => {
      const controller = new AbortController();

      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/photos", 
          { signal: controller.signal }
        );

        if (!res.ok) throw new Error("Failed to fetch");

        const data: Photo[] = await res.json();
        return data.slice(0, 5000);
      } catch (error: any) {
        if (error.name === "AbortError") {
          console.log("Request Aborted");
        } else {
          throw error;
        }
        return [];
      } finally {
        console.log("Fetch Attempt Finished");
      }
    },
    staleTime: 1000 * 60 * 5
  });
};

// ============================
// Row Component (Virtualized)
// ============================
const Row = React.memo(
  ({ index, style, data }: ListChildComponentProps<Photo[]>) => {
    const item = data[index];

    return (
      <div
        style={{
          ...style,
          borderBottom: "1px solid #ccc",
          padding: "5px"
        }}
      >
        {item?.title}
      </div>
    );
  }
);

// ============================
// Lazy Virtual List
// ============================
type VirtualListProps = {
  items: Photo[];
};

const VirtualList = lazy<React.FC<VirtualListProps>>(() =>
  Promise.resolve({
    default: ({ items }: VirtualListProps) => (
      <List
        height={500}
        itemCount={items.length}
        itemSize={50}
        width={"100%"}
        itemData={items}
      >
        {Row}
      </List>
    )
  })
);

// ============================
// Main Component
// ============================
function AppContent() {
  const { data = [], isLoading, error } = usePhotos();

  const [search, setSearch] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  // Filter
  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, data]);

  // Callback
  const handleClear = useCallback(() => {
    setSearch("");
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div style={style.parent}>
      <h2 style={style.title}>Optimized React TS App</h2>

      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>

      <br />
      <br />

      <input
        style={style.input}
        placeholder="Search..."
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
      />

      <button onClick={handleClear}>Clear</button>

      <div style={style.child}>
        <p style={style.title}>Virtualized List</p>

        <Suspense fallback={<p>Loading List...</p>}>
          <VirtualList items={filteredData} />
        </Suspense>
      </div>
    </div>
  );
}

// ============================
// App Wrapper
// ============================
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}

// ============================
// React 18 Root
// ============================
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);