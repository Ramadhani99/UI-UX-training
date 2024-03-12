// AuthProvider.js
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // Implement your authentication logic here
    // For example, set isAuthenticated to true after successful login
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Implement your logout logic here
    // For example, set isAuthenticated to false after logout
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
