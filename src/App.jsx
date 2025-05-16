// App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import EmployeeList from "./components/EmployeeList";
import CountryList from "./components/CountryList";
import CountryAdd from "./components/CountryAdd";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="min-h-screen bg-gray-100 flex items-start zjustify-center py-10 px-4">
          <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg p-6">
            <header className="mb-6 border-b pb-4">
              <h1 className="text-3xl font-bold text-gray-800 text-center">
                Employee & Country Manager
              </h1>
              <nav className="flex justify-center space-x-6 mt-4">
                <NavLink
                  to="/employees"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                      : "text-gray-600 hover:text-blue-600"
                  }
                >
                  Employees
                </NavLink>
                <NavLink
                  to="/countries"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                      : "text-gray-600 hover:text-blue-600"
                  }
                >
                  Countries
                </NavLink>
                <NavLink
                  to="/add-country"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                      : "text-gray-600 hover:text-blue-600"
                  }
                >
                  Add Country
                </NavLink>
              </nav>
            </header>

            <main className="space-y-8">
              <Routes>
                <Route path="/" element={<Navigate to="/employees" />} />
                <Route path="/employees" element={<EmployeeList />} />
                <Route path="/countries" element={<CountryList />} />
                <Route path="/add-country" element={<CountryAdd />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
