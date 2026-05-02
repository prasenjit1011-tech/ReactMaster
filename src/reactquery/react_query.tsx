import React, {  useState,  useMemo,  useCallback,  useEffect } from "react";
import ReactDOM from "react-dom/client";
import {  QueryClient,  QueryClientProvider,  useQuery,  useQueryClient } from "@tanstack/react-query";

/* ================= TYPES ================= */

interface Product {
    _id: string;
    name: string;
    price: number;
    stock: number;
    createdAt: string;
    updatedAt: string;
}

interface ProductResponse {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    data: Product[];
}

/* ================= API ================= */

const LIMIT = 3;
const fetchProducts = async (   page: number,    limit: number,    signal?: AbortSignal): Promise<ProductResponse> => {
    const url = `http://localhost:3000/productlist?page=${page}&limit=${limit}`;
    const res = await fetch(url,{ signal });
    if (!res.ok) throw new Error("Failed to fetch products");

    return res.json();
};

/* ================= APP ================= */

const App: React.FC = () => {
    const [page, setPage] = useState(1);
    const queryClient = useQueryClient();

    const { data, isLoading, isError, error, isFetching } =
        useQuery<ProductResponse>({
            queryKey: ["productdata", page, LIMIT],
            queryFn: ({ signal }) => fetchProducts(page, LIMIT, signal),

            // ✅ React Query v5 replacement for keepPreviousData
            placeholderData: (prev) => prev,

            staleTime: 1000 * 60 * 2,
            gcTime: 1000 * 60 * 5,
            retry: 1,
        });

  /* ================= PREFETCH NEXT PAGE ================= */

    useEffect(() => {
        if (data && data.page < data.totalPages) {
            queryClient.prefetchQuery({
                queryKey: ["products", page + 1, LIMIT],
                queryFn: ({ signal }) =>
                fetchProducts(page + 1, LIMIT, signal),
            });
        }
    }, [data, page, queryClient]);

  /* ================= HANDLERS ================= */

    const nextPage = useCallback(() => {
        if (data && page < data.totalPages) {
            setPage((p) => p + 1);
        }
    }, [data, page]);

    const prevPage = useCallback(() => {
        setPage((p) => Math.max(p - 1, 1));
    }, []);

  /* ================= MEMOIZED DATA ================= */

    const products = useMemo(() => data?.data ?? [], [data]);

  /* ================= UI STATES ================= */

    if (isLoading) return <p>Loading products...</p>;

    if (isError)
        return <p>Error: {(error as Error).message}</p>;

  /* ================= UI ================= */

    return (
        <div style={{ padding: 20 }}>
            <h2>Products</h2>

            {isFetching && <p>Updating...</p>}

            <ul>
                {products.map((p) => (
                    <li key={p._id}>
                        {p.name} — ₹{p.price} (Stock: {p.stock})
                    </li>
                ))}
            </ul>

            <div style={{ marginTop: 20 }}>
                <button onClick={prevPage} disabled={page === 1}>
                    Prev
                </button>

                <span style={{ margin: "0 10px" }}>
                    Page {data?.page ?? 1} / {data?.totalPages ?? 1}
                </span>

                <button onClick={nextPage}  disabled={page === data?.totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

/* ================= QUERY CLIENT ================= */

const queryClient = new QueryClient();

/* ================= ROOT ================= */

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);