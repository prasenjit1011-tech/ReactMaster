import React, { createContext, useContext, useState } from "react";

// 1. Create Context
const UserContext = createContext();

// 2. Provider Component
const UserProvider = ({ children }) => {
  const [user, setUser] = useState("Prasenjit");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// 3. Child Component (Consumer)
const Profile = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>User: {user}</h2>
      <button onClick={() => setUser("New Name")}>
        Change User
      </button>
    </div>
  );
};

// 4. Main App
const App = () => {
  return (
    <UserProvider>
      <h1>React Context API Example</h1>
      <Profile />
    </UserProvider>
  );
};

export default App;