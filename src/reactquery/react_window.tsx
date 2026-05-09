import ReactDOM from "react-dom/client";
import React, {  memo,  useCallback,  useMemo,  useState,} from "react";
import { QueryClient,  QueryClientProvider,  useQuery,} from "@tanstack/react-query";
import { FixedSizeList as List } from "react-window";

// ======================================================
// INSTALL
// ======================================================
// npm install @tanstack/react-query
// npm install react-window@1.8.10
// npm install -D @types/react-window

// ======================================================
// TYPES
// ======================================================
type Photo = {  albumId: number;  id: number;  title: string;  url: string;  thumbnailUrl: string;  };

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

// ======================================================
// STYLES
// ======================================================
const styles: Record<string, React.CSSProperties> = {
  app: {
    maxWidth: "1200px",
    margin: "30px auto",
    padding: "20px",
    fontFamily: "Arial",
    background: "#f5f7fb",
    borderRadius: "12px",
  },

  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  },

  title: {
    marginBottom: "20px",
    fontSize: "28px",
    fontWeight: "bold",
    color: "#222",
  },

  toolbar: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: "20px",
  },

  input: {
    padding: "10px 14px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    width: "260px",
    outline: "none",
    fontSize: "14px",
  },

  button: {
    padding: "10px 16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    background: "#2563eb",
    color: "#fff",
    fontWeight: 600,
  },

  clearButton: {
    padding: "10px 16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    background: "#ef4444",
    color: "#fff",
    fontWeight: 600,
  },

  stats: {
    marginBottom: "15px",
    fontSize: "15px",
    color: "#555",
  },

  listContainer: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    overflow: "hidden",
  },

  row: {
    display: "flex",
    alignItems: "center",
    padding: "0 15px",
    borderBottom: "1px solid #eee",
    background: "#fff",
  },

  image: {
    width: "45px",
    height: "45px",
    borderRadius: "8px",
    marginRight: "15px",
    objectFit: "cover",
  },

  rowTitle: {
    fontSize: "14px",
    color: "#222",
  },

  loading: {
    textAlign: "center",
    padding: "40px",
    fontSize: "18px",
  },

  error: {
    textAlign: "center",
    padding: "40px",
    color: "red",
    fontSize: "18px",
  },
};

// ======================================================
// API FETCH
// ======================================================
const url = "https://jsonplaceholder.typicode.com/photos"
const fetchPhotos = async (  signal?: AbortSignal): Promise<Photo[]> => {
  const response = await fetch(url, { signal });
  
  if (!response.ok) { throw new Error("Failed to fetch photos");  }
  const data: Photo[] = await response.json();

  // LIMIT DATA
  return data.slice(0, 5000);
};

// ======================================================
// CUSTOM HOOK
// ======================================================
const usePhotos = () => {
  return useQuery<Photo[], Error>({
    queryKey: ["photos"],
    queryFn: ({ signal }) => fetchPhotos(signal),
  });
};

// ======================================================
// ROW COMPONENT
// ======================================================
type RowProps = {
  index: number;
  style: React.CSSProperties;
  data: Photo[];
};

const Row = memo(({ index, style, data }: RowProps) => {
  const item = data[index];

  if (!item) return null;

  return (
    <div
      style={{
        ...style,
        ...styles.row,
      }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/1674/1674295.png"
        alt={item.title}
        loading="lazy"
        style={styles.image}
      />

      <div style={styles.rowTitle}>
        <strong>#{item.id}</strong> — {item.title}
      </div>
    </div>
  );
});

Row.displayName = "Row";

// ======================================================
// VIRTUAL LIST
// ======================================================
type VirtualListProps = {
  items: Photo[];
};

const VirtualList = memo(
  ({ items }: VirtualListProps) => {
    return (
      <div style={styles.listContainer}>
        <List
          height={600}
          width={"100%"}
          itemCount={items.length}
          itemSize={70}
          itemData={items}
        >
          {Row}
        </List>
      </div>
    );
  }
);

VirtualList.displayName = "VirtualList";

// ======================================================
// MAIN CONTENT
// ======================================================
function AppContent() {
  const { data = [], isLoading, error } =
    usePhotos();

  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  // ====================================================
  // FILTERED DATA
  // ====================================================
  const filteredPhotos = useMemo(() => {
    if (!search.trim()) {
      return data;
    }

    const keyword = search.toLowerCase();

    return data.filter((photo) =>
      photo.title.toLowerCase().includes(keyword)
    );
  }, [data, search]);

  // ====================================================
  // CALLBACKS
  // ====================================================
  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    },
    []
  );

  const handleClear = useCallback(() => {
    setSearch("");
  }, []);

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  // ====================================================
  // LOADING
  // ====================================================
  if (isLoading) {
    return (
      <div style={styles.loading}>
        Loading photos...
      </div>
    );
  }

  // ====================================================
  // ERROR
  // ====================================================
  if (error) {
    return (
      <div style={styles.error}>
        {error.message}
      </div>
    );
  }

  // ====================================================
  // UI
  // ====================================================
  return (
    <div style={styles.app}>
      <div style={styles.card}>
        <h1 style={styles.title}>
          React Virtualized Photo List
        </h1>

        <div style={styles.toolbar}>
          <input
            type="text"
            placeholder="Search photos..."
            value={search}
            onChange={handleSearch}
            style={styles.input}
          />

          <button
            onClick={handleClear}
            style={styles.clearButton}
          >
            Clear
          </button>

          <button
            onClick={handleIncrement}
            style={styles.button}
          >
            Count: {count}
          </button>
        </div>

        <div style={styles.stats}>
          Total Photos:{" "}
          <strong>{filteredPhotos.length}</strong>
        </div>

        <VirtualList items={filteredPhotos} />
      </div>
    </div>
  );
}

// ======================================================
// APP
// ======================================================
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}

// ======================================================
// ROOT
// ======================================================
const rootElement =
  document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);