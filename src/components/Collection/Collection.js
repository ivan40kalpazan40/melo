import { useState, useEffect } from 'react';
import { useAuth } from '../../context/Auth/AuthState';
import * as artistServices from '../../services/artistServices';
import CompactMenu from '../CompactMenu';
const Collection = () => {
  const { user } = useAuth();
  const [myArtists, setMyArtists] = useState([]);
  useEffect(() => {
    artistServices.getUserArtists(user._id).then((res) => {
      if (res.ok) setMyArtists(res.artists);
    });
  }, []);
  return (
    <div className='ui  container'>
      <h1>Favorite music of {user.username}</h1>
      <CompactMenu user={user} />
      <div className='ui segment'>
        <div className='ui huge vertical list'>
          {myArtists.length > 0
            ? myArtists.map((artist) => (
                <div className='item' key={artist._id}>
                  <img
                    className='ui avatar image'
                    src='https://media.istockphoto.com/vectors/music-band-on-stage-vector-id665565652'
                  />
                  <div className='content'>
                    <a className='header'>{artist.artistName}</a>
                  </div>
                </div>
              ))
            : 'No Artists'}
        </div>
      </div>
    </div>
  );
};

export default Collection;
