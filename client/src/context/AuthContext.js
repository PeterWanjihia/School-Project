import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      const user = localStorage.getItem("currentUser");
      setCurrentUser(JSON.parse(user));
    };
    getUser();
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
