import { useEffect } from 'react';
import { useData } from '../../context/Data/DataState';
import SingleArtist from '../SingleArtist/SingleArtist';
import * as apiServices from '../../services/apiServices';
const Artists = () => {
  const [data, setData] = useData();
  useEffect(() => {
    apiServices
      .getArtists()
      .then((res) => {
        setData(res);
        console.log(`RESULT FROM FETCH SERVICE: `, res.results);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className='ui container'>
      <h1>Artists Random List</h1>
      <div className='ui segment'>
        <div className='ui three column stackable padded grid'>
          <div className='ui link cards'>
            {data.results?.length > 0
              ? data.results.map((artist) => (
                  <SingleArtist key={artist.id} artist={artist} />
                ))
              : 'No artists available'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artists;
