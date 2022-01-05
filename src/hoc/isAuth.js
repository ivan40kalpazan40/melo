import { useAuth } from '../context/Auth/AuthState';
import { Navigate } from 'react-router-dom';

export const isAuth = (Component) => {
  const WrappedComponent = (props) => {
    const { user } = useAuth();
    return Boolean(user) ? <Component /> : <Navigate to='/user/login' />;
  };
  return WrappedComponent;
};
