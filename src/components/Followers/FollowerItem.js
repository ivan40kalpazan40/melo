import { Link } from 'react-router-dom';
const FollowerItem = ({ follower, user }) => {
  return (
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
  );
};

export default FollowerItem;
