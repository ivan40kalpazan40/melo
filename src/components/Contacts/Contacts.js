import { useEffect, useState } from 'react';
import CompactMenu from '../CompactMenu';
import { useAuth } from '../../context/Auth/AuthState';
import * as authServices from '../../services/authServices';
const Contacts = () => {
  const { user, logout } = useAuth();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    authServices
      .getUserContacts(user._id)
      .then((res) => setContacts(res.payload))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className='ui  container'>
      <h1>Contacts for {user.username}</h1>
      <CompactMenu user={user} />
      <div className='ui segment'>
        <div className='ui huge vertical list'>
          {contacts.length > 0
            ? contacts.map((contact) => (
                <div className='item' key={contact._id}>
                  <img className='ui avatar image' src={contact.image} />
                  <div className='content'>
                    <a className='header'>{contact.username}</a>
                  </div>
                </div>
              ))
            : 'No Contacts'}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
