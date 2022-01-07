import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { urlConfig } from '../../config/utils.config';
import { useAuth } from '../../context/Auth/AuthState';
import * as apiServices from '../../services/apiServices';
import * as artistServices from '../../services/artistServices';
const Details = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [artist, setArtist] = useState({});
  const [current, setCurrent] = useState({});
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const { user } = useAuth();
  useEffect(() => {
    setLoading(true);
    apiServices
      .getOne(id)
      .then((res) => {
        console.log('Artist from API', res);
        setArtist(res);
        apiServices.getArtistInfo(res.name).then((response) => {
          setCurrent(response.results[0]);
          if (Boolean(user)) {
            artistServices.getArtist(res.id).then((artistResponse) => {
              if (artistResponse.ok) {
                if (artistResponse.artist.users.includes(user._id)) {
                  setLiked(true);
                } else {
                  setLiked(false);
                }
                setLikes(artistResponse.artist.users.length);
              } else {
                setLiked(false);
                setLikes(0);
              }
            });
          }
          setLoading(false);
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  const addArtistHandler = (e) => {
    artistServices
      .addArtist(artist.id, artist.name, user._id, current.cover_image)
      .then((res) => {
        if (res.ok) {
          setLiked(true);
          setLikes(likes + 1);
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className='ui container'>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h2>{artist.name}</h2>
          {Boolean(user) ? (
            <div className='ui label'>
              <i className='heart icon red'></i> {likes}
            </div>
          ) : (
            <h4>Real Name</h4>
          )}

          <div className='ui segment'>
            <div className='ui two column grid'>
              <div className='row'>
                <img
                  src={current.cover_image}
                  alt=''
                  className='ui medium centered rounded image'
                />
              </div>
              {artist.realname ? (
                <div className='row'>
                  <div className='column right aligned'>Real Name</div>
                  <div className='column'>{artist.realname}</div>
                </div>
              ) : (
                ''
              )}

              <div className='row'>
                <div className='column right aligned'>Bio</div>
                <div className='column'>
                  {artist.profile || 'No bio available'}
                </div>
              </div>
              {artist.aliases ? (
                <div className='row'>
                  <div className='column right aligned'>Aliases</div>
                  <div className='column'>
                    {artist.aliases?.map((alias) => {
                      return (
                        <p key={alias.id}>
                          <Link to={`/artists/${alias.id}/details`}>
                            {alias.name}
                          </Link>
                        </p>
                      );
                    })}
                  </div>
                </div>
              ) : (
                ''
              )}
              {artist.groups ? (
                <div className='row'>
                  <div className='column right aligned'>Groups</div>
                  <div className='column'>
                    {artist.groups?.map((group) => (
                      <p className='ui center aligned' key={group.id}>
                        <Link to={`/artists/${group.id}/details`}>
                          {group.name}
                        </Link>
                      </p>
                    ))}
                  </div>
                </div>
              ) : artist.members ? (
                <div className='row'>
                  <div className='column right aligned'>Members</div>
                  <div className='column'>
                    {artist.members?.map((member) => (
                      <p className='ui center aligned' key={member.id}>
                        <Link to={`/artists/${member.id}/details`}>
                          {member.name}
                        </Link>
                      </p>
                    ))}
                  </div>
                </div>
              ) : (
                ''
              )}
              {artist.urls ? (
                <div className='row'>
                  <div className='column right aligned'>Social Media</div>
                  <div className='column'>
                    {' '}
                    {artist.urls?.map((url) => {
                      return (
                        <p key={url}>
                          <a href={url} className='ui label black'>
                            {urlConfig(url)}
                          </a>
                        </p>
                      );
                    })}
                  </div>
                </div>
              ) : (
                ''
              )}
              {Boolean(user) ? (
                <div className='row'>
                  <div className='column right aligned'></div>
                  <div className='column'>
                    {liked ? (
                      <button className='ui button'>Liked</button>
                    ) : (
                      <button className='ui button' onClick={addArtistHandler}>
                        Add Artist
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
