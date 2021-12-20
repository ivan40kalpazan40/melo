import { useAuth } from '../../context/Auth/AuthState';
const Home = () => {
  const { user } = useAuth();
  return (
    <div className='ui container'>
      <h1>Home</h1>
      <p>{user ? 'Authenticated' : 'Not Authenticated'}</p>
    </div>
  );
};

export default Home;
