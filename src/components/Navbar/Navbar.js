import { useAuth } from '../../context/Auth/AuthState';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { user } = useAuth();
  console.log('From NAV: ', user);
  const guestMenu = (
    <>
      <div className='menu'>
        <Link to='/' className='item'>
          Home
        </Link>
      </div>
      <div className='right menu'>
        <Link to='/user/login' className='item'>
          Login
        </Link>
        <Link to='/user/register' className='item'>
          Register
        </Link>
      </div>
    </>
  );
  const userMenu = (
    <>
      <div className='menu'>
        <Link to='/' className='item'>
          Home
        </Link>
        <Link to={`/user/${user?._id}/profile`} className='item'>
          Profile
        </Link>
      </div>
      <div className='right menu'>
        <Link to='/user/logout' className='item'>
          Logout
        </Link>
      </div>
    </>
  );
  return (
    <div className='ui inverted menu'>
      <div className='header item'>: melo :::</div>

      {user ? userMenu : guestMenu}
    </div>
  );
};

export default Navbar;
