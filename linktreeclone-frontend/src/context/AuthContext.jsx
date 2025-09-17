import { createContext, useContext, useState } from 'react';
import { signin as performSignin } from '../features/auth/api/authApi';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

  const [token, setToken] = useState(localStorage.getItem('authToken'));

  const login = async (email, password) => {
    try {
      const response = await performSignin({ email, password });
      const newToken = response.data.token; 

      localStorage.setItem('authToken', newToken);
      setToken(newToken);
      return true;
    } catch (error) {
      console.error("Falha no login:", error);
      
      logout();
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setToken(null);
  };

  const authContextValue = {
    token,
    isAuthenticated: !!token,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};