import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CompactMenu from '../CompactMenu';
import { useAuth } from '../../context/Auth/AuthState';

import * as authServices from '../../services/authServices';

const Followers = () => {
  const { user } = useAuth();
  const [followers, setFollowers] = useState([]);
  useEffect(() => {
    authServices
      .getUserFollowers(user._id)
      .then((response) => setFollowers(response.payload))
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div className='ui container'>
      <h1>Followers for {user.username}</h1>
      <CompactMenu user={user} />
      <div className='ui segment'>
        <div className='ui huge vertical list'>
          {followers.length > 0
            ? followers.map((follower) => (
                <div className='item'>
                  <img className='ui avatar image' src={follower.image} />
                  <div className='content'>
                    <Link
                      to={`/user/${user._id}/contacts/${follower._id}`}
                      className='header'
                      key={follower._id}
                    >
                      {follower.username}
                    </Link>
                  </div>
                </div>
              ))
            : 'No Followers'}
        </div>
      </div>
    </div>
  );
};

export default Followers;
