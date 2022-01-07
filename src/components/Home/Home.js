import { useState, useEffect } from 'react';
import { useAuth } from '../../context/Auth/AuthState';
import * as apiServices from '../../services/apiServices';
import * as artistServices from '../../services/artistServices';
import { useNavigate, Link } from 'react-router-dom';
const Home = () => {
  const { user } = useAuth();
  const [hasSearch, setHasSearch] = useState(false);
  const [artists, setArtists] = useState([]);
  const [results, setResults] = useState({ pagination: {}, results: [] });
  const navigate = useNavigate();
  let resType = '';
  useEffect(() => {
    setHasSearch(false);
    if (!Boolean(user)) {
      artistServices.getAllArtists().then((res) => setArtists(res.artists));
    }
  }, []);
  const randomArtistsListHandler = () => navigate('/artists');
  const findFriendsHandler = () => navigate('/user');
  const clickSearch = (e) => {
    const searchValue = e.target.previousSibling.value;
    apiServices
      .getArtistInfo(searchValue)
      .then((res) => {
        setHasSearch(true);
        setResults(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(`There is error`, err.message);
      });
    e.target.previousSibling.value = '';
  };
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
                <div className='ui icon header form'>
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

                      <i className='search link icon ' onClick={clickSearch}>
                        <Link to='#'></Link>
                      </i>
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
                <div className='ui black button' onClick={findFriendsHandler}>
                  Find Friends
                </div>
              </div>
            </div>
          </div>
          <div className='ui segment'>
            <div className='ui grid'>
              {hasSearch ? (
                <div className='row center aligned'>
                  <div className='column'>
                    <div className='ui label black'>
                      Results from search
                      <div className='detail'>{results.pagination.items}</div>
                    </div>
                  </div>
                </div>
              ) : (
                ''
              )}

              <div className='row center aligned'>
                <div className='column'>
                  {hasSearch ? (
                    <>
                      {results.results
                        .sort((a, b) => a.type.localeCompare(b.type))
                        .map((result) => {
                          let current = result.type;
                          let displayType = '';

                          console.log(`ResType: `, displayType);
                          if (resType === '') {
                            resType = current;
                            displayType = resType;
                          } else if (resType === current) {
                            displayType = '';
                          } else {
                            resType = current;
                            displayType = resType;
                          }
                          return (
                            <>
                              {displayType ? <h1>{displayType}</h1> : ''}

                              <p>
                                {current === 'artist' ? (
                                  <Link
                                    to={`/artists/${result.id}/details`}
                                    key={result.id}
                                  >
                                    {result.title}
                                  </Link>
                                ) : (
                                  <Link to='#' key={result.id}>
                                    {result.title}
                                  </Link>
                                )}
                              </p>
                            </>
                          );
                        })}
                    </>
                  ) : (
                    <p>No results!</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className='ui placeholder segment'>
            <div className='ui two column stackable center aligned grid'>
              <div className='middle aligned row'>
                <div className='column'>
                  <div className='ui icon header'>
                    <i className='music icon'></i>
                    See Random Artists
                  </div>
                  <div
                    className='ui primary button'
                    onClick={randomArtistsListHandler}
                  >
                    Go To List
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='ui segment'>
            <h1>Top Artists</h1>
            <div className='ui three column grid'>
              {artists
                .slice(-6)
                .sort((a, b) => b.users.length - a.users.length)
                .map((artist) => (
                  <div className='column'>
                    <div className='ui fluid card'>
                      <div className='image'>
                        <img className='ui thumb' src={artist.artistImage} />
                      </div>
                      <div className='content'>
                        <a className='header'>{artist.artistName}</a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </>
      )}

      {/*  */}
    </div>
  );
};

export default Home;
