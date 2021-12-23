import { useAuth } from '../../context/Auth/AuthState';
import { Link } from 'react-router-dom';
import CompactMenu from '../CompactMenu';
const Collection = () => {
  const { user } = useAuth();
  return (
    <div className='ui  container'>
      <h1>Favorite music of {user.username}</h1>
      <CompactMenu user={user} />
    </div>
  );
};

export default Collection;
