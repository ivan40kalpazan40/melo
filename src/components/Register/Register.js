import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../context/Auth/AuthState';
import Alert from '../Alert';
import * as authServices from '../../services/authServices';

const Register = () => {
  const { user, login } = useAuth();
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();
  const submitRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    authServices
      .register(username, password, confirmPassword)
      .then((response) => {
        if (response.ok === false) throw new Error(response.message);
        login(response);
        navigate('/');
      })
      .catch((err) => {
        setAlert({ status: 'Register Error', message: err.message });
        e.target.reset();
        console.log(err.message);
        setTimeout(() => {
          setAlert(null);
        }, 4500);
      });
  };
  return (
    <div className='ui container'>
      <h1>Register</h1>
      <Alert error={alert} />
      <form className='ui form' method='POST' onSubmit={submitRegister}>
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
        <div className='field'>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            type='password'
            name='confirmPassword'
            id='confirmPassword'
            placeholder='Confirm Password'
          />
        </div>
        <button className='ui button secondary' type='submit'>
          <i className='icon user plus'> </i>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
