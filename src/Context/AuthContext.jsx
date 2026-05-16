import { createContext, useContext, useEffect, useState } from "react";

const ADMIN_LOGIN = "muhammad";
const ADMIN_PASSWORD = "ad234r7fn7g3n4378g37#";
const STORAGE_KEY = "noutusta_admin_auth";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) === "1";
  });

  useEffect(() => {
    if (isAdmin) {
      localStorage.setItem(STORAGE_KEY, "1");
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [isAdmin]);

  const login = (username, password) => {
    if (username === ADMIN_LOGIN && password === ADMIN_PASSWORD) {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logout = () => setIsAdmin(false);

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
