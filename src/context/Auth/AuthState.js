import { useContext } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { AuthContext } from './AuthContext';
const initialValue = null;
export const AuthProvider = (props) => {
  const [user, setUser] = useLocalStorage('user', initialValue);
  const login = (userData) => {
    setUser(userData);
  };
  const logout = () => {
    setUser(initialValue);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  return authContext;
};
