import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as authServices from '../../services/authServices';
const ContactProfile = () => {
  const [contact, setContact] = useState({});
  const { userId, contactId } = useParams();
  useEffect(() => {
    authServices
      .getMyContact(userId, contactId)
      .then((res) => {
        console.log(res.contact);
        if (!res.ok) {
          throw new Error(res);
        }
        setContact(res.contact);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className='ui container'>
      <h1>Contact Profile</h1>
      <div className='ui segment'>
        <h2>{contact.username}</h2>
        <div className='ui two column grid'>
          <div className='row'>
            <div className='column right aligned'>
              {' '}
              <i className='user icon'></i>
            </div>
            <div className='column'>{contact.username}</div>
          </div>
          <div className='row'>
            <div className='column right aligned'>
              {' '}
              <i className='music icon'></i>
            </div>
            <div className='column'>
              <p>
                {contact.artists?.length}{' '}
                {contact.artists?.length === 1
                  ? 'favourite artist'
                  : 'favourite artists'}
              </p>
              {contact.artists?.map((artist) => (
                <p>
                  <Link to={`/artists/${artist.discogsId}/details`}>
                    {artist.artistName}
                  </Link>
                </p>
              ))}
            </div>
          </div>
          <div className='row'>
            <div className='column right aligned'>username</div>
            <div className='column'>{contact.username}</div>
          </div>
          <div className='row'>
            <div className='column right aligned'>username</div>
            <div className='column'>{contact.username}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactProfile;
