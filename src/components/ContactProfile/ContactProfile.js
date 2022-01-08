import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as authServices from '../../services/authServices';
import ArtistLink from './ArtistLink';
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
          <div className='row profile-row'>
            <div className='column centered'>
              <img
                className='ui medium centered circular image profile-image'
                src={contact.image}
                alt=''
              />
            </div>
          </div>
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
                <ArtistLink artist={artist} key={artist.discogsId} />
              ))}
            </div>
          </div>
          <div className='row'>
            <div className='column right aligned'>
              <i className='point icon'></i>
            </div>
            <div className='column'>
              {contact.location || 'location not added'}
            </div>
          </div>
          <div className='row'>
            <div className='column right aligned'>
              {' '}
              <i className='mail icon'></i>
            </div>
            <div className='column'>{contact.email || 'email not added'}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactProfile;
