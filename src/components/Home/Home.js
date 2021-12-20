import { useAuth } from '../../context/Auth/AuthState';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const randomArtistsListHandler = () => navigate('/artists');
  return (
    <div className='ui container'>
      <h1>Welcome to :melo:::</h1>
      <h3>{user ? `${user.username}'s home screen` : 'Not Authenticated'}</h3>

      {/*  */}
      {user ? (
        <div className='ui placeholder segment'>
          <div className='ui three column stackable center aligned grid'>
            <div className='middle aligned row'>
              <div className='column'>
                <div className='ui icon header'>
                  <i className='music icon'></i>
                  See Random Artists
                </div>
                <div
                  className='ui black button'
                  onClick={randomArtistsListHandler}
                >
                  Go To List
                </div>
              </div>
              <div className='column'>
                <div className='ui icon header'>
                  <i className='search icon'></i>
                  Search Artist, Genre or Release
                </div>
                <div className='field'>
                  <div className='ui search'>
                    <div className='ui icon input'>
                      <input
                        className='prompt'
                        type='text'
                        placeholder='artist, genres, etc. ...'
                      />
                      <i className='search icon'></i>
                    </div>
                    <div className='results'></div>
                  </div>
                </div>
              </div>

              <div className='column'>
                <div className='ui icon header'>
                  <i className='user plus icon'></i>
                  Add Friend
                </div>
                <div className='ui black button'>Find Friends</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='ui placeholder segment'>
          <div className='ui two column stackable center aligned grid'>
            <div className='middle aligned row'>
              <div className='column'>
                <div className='ui icon header'>
                  <i className='music icon'></i>
                  See Random Artists
                </div>
                <div className='ui primary button'>Go To List</div>
              </div>
              <div className='column'>
                <div className='ui icon header'>
                  <i className='search icon'></i>
                  Search Artist, Genre or Release
                </div>
                <div className='field'>
                  <div className='ui search'>
                    <div className='ui icon input'>
                      <input
                        className='prompt'
                        type='text'
                        placeholder='artist, genres, etc. ...'
                      />
                      <i className='search icon'></i>
                    </div>
                    <div className='results'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/*  */}
    </div>
  );
};

export default Home;
