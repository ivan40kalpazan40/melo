import { Link } from 'react-router-dom';
const SingleArtist = ({ artist }) => {
  const defaultImage =
    'https://media.istockphoto.com/vectors/cartoon-rock-band-vector-vector-id621592618';
  return (
    <div className='card column'>
      <div className='image'>
        <img className='thumb' src={artist.thumb || defaultImage} alt='' />
      </div>
      <div className='content'>
        <div className='header'>
          <Link to={`/artists/${artist.id}/details`}>{artist.title}</Link>
        </div>
        <div className='meta'>
          <a>{artist.type}</a>
        </div>
      </div>
      <div className='extre content'>
        <span className='right floated'>
          <i className='heart outline icon'></i>
          <span>3</span>
        </span>
        <i className='thumbs up outline icon'></i>
        <span>4</span>
      </div>
    </div>
  );
};

export default SingleArtist;
