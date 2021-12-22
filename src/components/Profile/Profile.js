import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/Auth/AuthState';
import * as authServices from '../../services/authServices';

const Profile = () => {
  const { user, loadUser } = useAuth();
  useEffect(() => {
    authServices.getUser(user._id).then((res) => loadUser(res));
  }, []);
  return (
    <div className='ui  container'>
      <h1>Profile for {user.username}</h1>
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
      <div className='ui segment'>
        <div className='ui two column grid'>
          <div className='row profile-row'>
            <div className='column centered'>
              <img
                className='ui medium centered circular image profile-image'
                src={user.image}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
      <div className='ui segment'>
        <div className='ui two column grid'>
          <div className='row'>
            <div className='column right aligned'>
              <i className='user icon'></i>
            </div>
            <div className='column centered'>{user.username}</div>
          </div>
          <div className='row'>
            <div className='column right aligned'>
              <i className='group icon'></i>
            </div>
            <div className='column centered'>
              {user.contacts.length}
              {user.contacts.length === 1 ? ' Follow' : ' Follows'}
            </div>
          </div>
          <div className='row'>
            <div className='column right aligned'>
              <i className='point icon'></i>
            </div>
            <div className='column'>{user.location}</div>
          </div>
          <div className='row'>
            <div className='column right aligned'>
              <i className='envelope outline icon'></i>
            </div>
            <div className='column'>{user.email || 'add email'}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
