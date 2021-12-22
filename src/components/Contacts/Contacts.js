import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Auth/AuthState';
import * as authServices from '../../services/authServices';
const Contacts = () => {
  const { user, logout } = useAuth();
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    authServices
      .getUserContacts(user._id)
      .then((res) => setContacts(res.payload))
      .catch((err) => {
        console.log(err.message);
        logout();
        navigate('/user/login');
      });
  }, []);
  return (
    <div className='ui  container'>
      <h1>Contacts for {user.username}</h1>
      <div className='ui compact menu'>
        <Link to={`/user/${user._id}/profile`} className='item'>
          <i className='home icon'></i>
        </Link>
        <Link to={`/user/${user._id}/contacts`} className='item'>
          <i className='group icon'></i>
          Friends
        </Link>
        <Link to={`/user/${user._id}/collection`} className='item'>
          <i className='music icon'></i>
          Artists
        </Link>
        <Link to={`/user/${user._id}/edit`} className='item'>
          <i className='edit icon'></i>
          Edit
        </Link>
      </div>
      <div className='ui list'>
        {contacts.length > 0
          ? contacts.map((contact) => (
              <div className='item'>
                <img className='ui avatar image' src={contact.image} />
                <div className='content'>
                  <a className='header'>{contact.username}</a>
                  <div className='description'>
                    Last added{' '}
                    <a>
                      <b>Arrested Development</b>
                    </a>{' '}
                    just now.
                  </div>
                </div>
              </div>
            ))
          : 'No Contacts'}
      </div>
    </div>
  );
};

export default Contacts;
