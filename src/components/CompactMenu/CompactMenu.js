import { Link } from 'react-router-dom';
const CompactMenu = ({ user }) => {
  return (
    <div className='ui compact menu'>
      <Link to={`/user/${user._id}/profile`} className='item'>
        <i className='home icon'></i>
      </Link>
      <Link to={`/user/${user._id}/contacts`} className='item'>
        <i className='group icon'></i>
        Contacts
      </Link>
      <Link to={`/user/${user._id}/followers`} className='item'>
        <i className='eye icon'></i>
        Followers
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
  );
};

export default CompactMenu;
