import { useAuth } from '../../context/Auth/AuthState';
import * as authServices from '../../services/authServices';

const Register = () => {
  const { user, login } = useAuth();
  const submitRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    authServices
      .register(username, password, confirmPassword)
      .then((response) => {
        login(response);
        localStorage.setItem('user', JSON.stringify(response));
        console.log('sexy response ', response);
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className='ui container'>
      <h1>Register</h1>
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
