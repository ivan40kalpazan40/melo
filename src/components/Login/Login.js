import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Auth/AuthState';
import Alert from '../Alert';
import * as authServices from '../../services/authServices';
const Login = () => {
  const { user, login } = useAuth();
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();
  const submitLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');
    authServices
      .login(username, password)
      .then((res) => {
        if (res.ok === false) throw new Error(res.message);
        login(res);
        navigate('/');
      })
      .catch((err) => {
        setAlert({ status: 'Login Error', message: err.message });
        e.target.reset();
        console.log(err.message);
        setTimeout(() => {
          setAlert(null);
        }, 4500);
      });
  };
  return (
    <div className='ui container'>
      <h1>Login</h1>
      <Alert error={alert} />
      <form className='ui form' method='POST' onSubmit={submitLogin}>
        <div className='field'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            name='username'
            id='username'
            placeholder='Username'
          />
        </div>
        <div className='field'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Password'
          />
        </div>
        <button className='ui button secondary' type='submit'>
          <i className='icon sign-in'> </i>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
