import { Link } from 'react-router-dom';
const ArtistLink = ({ artist }) => {
  return (
    <p>
      <Link to={`/artists/${artist.discogsId}/details`}>
        {artist.artistName}
      </Link>
    </p>
  );
};

export default ArtistLink;
