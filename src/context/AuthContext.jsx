// src/context/AuthContext.js
import React, { createContext, useState, useContext } from "react";

// Create AuthContext
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component to provide auth state to the app
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);  

 
  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);  
  };

  
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);  
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
