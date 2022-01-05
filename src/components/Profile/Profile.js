import { useEffect } from 'react';
import { isAuth } from '../../hoc/isAuth';
import { useAuth } from '../../context/Auth/AuthState';
import * as authServices from '../../services/authServices';
import CompactMenu from '../CompactMenu/CompactMenu';

const Profile = () => {
  const { user, loadUser } = useAuth();
  useEffect(() => {
    authServices.getUser(user._id).then((res) => loadUser(res));
  }, []);
  return (
    <div className='ui  container'>
      <h1>Profile for {user.username}</h1>
      <CompactMenu user={user} />
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
              <i className='music icon'></i>
            </div>
            <div className='column centered'>
              {user.artists.length}{' '}
              {user.artists.length === 1
                ? 'Favorite Artist'
                : 'Favorite Artists'}
            </div>
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
              <i className='eye icon'></i>
            </div>
            <div className='column centered'>
              {user.followers.length}
              {user.followers.length === 1 ? ' Follower' : ' Followers'}
            </div>
          </div>
          <div className='row'>
            <div className='column right aligned'>
              <i className='point icon'></i>
            </div>
            <div className='column'>{user.location || 'add location'}</div>
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

export default isAuth(Profile);
