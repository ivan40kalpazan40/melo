const ArtistPreview = ({artist}) => {
  return (
    <div className='column' key={artist._id}>
      <div className='ui fluid card'>
        <div className='image'>
          <img className='thumb' src={artist.artistImage} />
        </div>
        <div className='content'>
          <a className='header'>{artist.artistName}</a>
        </div>
      </div>
    </div>
  );
};

export default ArtistPreview;
