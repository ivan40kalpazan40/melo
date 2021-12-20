import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/Auth/AuthState';
import * as authServices from '../../services/authServices';
const Logout = () => {
  const { logout } = useAuth();
  useEffect(() => {
    authServices.logoutUser().then((res) => {
      logout();
      localStorage.clear();
    });
  }, []);
  return <Navigate to='/user/login' />;
};

export default Logout;
