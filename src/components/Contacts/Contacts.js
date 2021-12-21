import { useAuth } from '../../context/Auth/AuthState';
import { Link } from 'react-router-dom';
const Contacts = () => {
  const { user } = useAuth();
  return (
    <div className='ui  container'>
      <h1>Contacts for {user.username}</h1>
      <div className='ui compact menu'>
        <Link to={`/user/${user._id}/profile`} className='item'>
          <i className='home icon'></i>
        </Link>
        <Link to={`/user/${user._id}/contacts`} className='item'>
          <i className='group icon'></i>
          Friends
        </Link>
        <Link to={`/user/${user._id}/collection`} className='item'>
          <i className='music icon'></i>
          Artists
        </Link>
        <Link to={`/user/${user._id}/edit`} className='item'>
          <i className='edit icon'></i>
          Edit
        </Link>
      </div>
    </div>
  );
};

export default Contacts;
