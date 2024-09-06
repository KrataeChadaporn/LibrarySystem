import React, { useContext, useState, createContext } from 'react';

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store customerId here

  const login = (customerId) => {
    setUser(customerId); // Store the logged-in customer ID
    console.log("User logged in:", customerId); // Debugging log
  };

  const logout = () => {
    setUser(null); // Clear the user state on logout
    console.log("User logged out"); // Debugging log
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
