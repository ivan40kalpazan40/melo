import { useAuth } from '../../context/Auth/AuthState';
const Home = () => {
  const { user } = useAuth();
  return (
    <div className='ui container'>
      <h1>Welcome to :melo:::</h1>
      <h3>{user ? `${user.username}'s home screen` : 'Not Authenticated'}</h3>

      {/*  */}
      {user ? (
        <div class='ui placeholder segment'>
          <div class='ui three column stackable center aligned grid'>
            <div class='middle aligned row'>
              <div class='column'>
                <div class='ui icon header'>
                  <i class='music icon'></i>
                  See Random Artists
                </div>
                <div class='ui black button'>Go To List</div>
              </div>
              <div class='column'>
                <div class='ui icon header'>
                  <i class='search icon'></i>
                  Search Artist, Genre or Release
                </div>
                <div class='field'>
                  <div class='ui search'>
                    <div class='ui icon input'>
                      <input
                        class='prompt'
                        type='text'
                        placeholder='artist, genres, etc. ...'
                      />
                      <i class='search icon'></i>
                    </div>
                    <div class='results'></div>
                  </div>
                </div>
              </div>

              <div class='column'>
                <div class='ui icon header'>
                  <i class='user plus icon'></i>
                  Add Friend
                </div>
                <div class='ui black button'>Find Friends</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div class='ui placeholder segment'>
          <div class='ui two column stackable center aligned grid'>
            <div class='middle aligned row'>
              <div class='column'>
                <div class='ui icon header'>
                  <i class='music icon'></i>
                  See Random Artists
                </div>
                <div class='ui primary button'>Go To List</div>
              </div>
              <div class='column'>
                <div class='ui icon header'>
                  <i class='search icon'></i>
                  Search Artist, Genre or Release
                </div>
                <div class='field'>
                  <div class='ui search'>
                    <div class='ui icon input'>
                      <input
                        class='prompt'
                        type='text'
                        placeholder='artist, genres, etc. ...'
                      />
                      <i class='search icon'></i>
                    </div>
                    <div class='results'></div>
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
