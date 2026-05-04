import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import ReactDOM from "react-dom/client";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

// ================= QUERY CLIENT =================
const queryClient = new QueryClient();

// ================= TYPES =================
type User = {
  id: number;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
};

// ================= CONTEXT =================
const AuthContext = createContext<AuthContextType | undefined>(undefined);

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside Provider");
  return context;
};

// ================= PROVIDER =================
const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1000));

    const fakeUser: User = {
      id: 1,
      name: "John Doe",
      email,
    };

    localStorage.setItem("user", JSON.stringify(fakeUser));
    setUser(fakeUser);
    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// ================= UI =================
const Login = () => {
  const { login, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        login(email, password);
      }}
    >
      <h2>Login</h2>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button disabled={loading}>
        {loading ? "Loading..." : "Login"}
      </button>
    </form>
  );
};

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

const App = () => {
  const { user, loading } = useAuth();
  if (loading) return <p>Loading...</p>;
  return user ? <Dashboard /> : <Login />;
};

// ================= ROOT =================
ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </QueryClientProvider>
);