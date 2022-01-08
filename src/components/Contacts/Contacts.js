import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CompactMenu from '../CompactMenu';
import { useAuth } from '../../context/Auth/AuthState';
import * as authServices from '../../services/authServices';
import ContactItem from './ContactItem';
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
                <ContactItem key={contact._id} contact={contact} user={user} />
              ))
            : 'No Contacts'}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
