import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/Auth/AuthState';
import * as authServices from '../../services/authServices';
const Contacts = () => {
  const { user } = useAuth();
  useEffect(() => {
    authServices
      .getUserContacts(user._id)
      .then((res) => console.log(`Finally contacts: `, res))
      .catch((err) => console.log(err.message));
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
      <div class='ui list'>
        <div class='item'>
          <img class='ui avatar image' src={user.image} />
          <div class='content'>
            <a class='header'>Rachel</a>
            <div class='description'>
              Last seen watching{' '}
              <a>
                <b>Arrested Development</b>
              </a>{' '}
              just now.
            </div>
          </div>
        </div>
        <div class='item'>
          <img class='ui avatar image' src={user.image} />
          <div class='content'>
            <a class='header'>Lindsay</a>
            <div class='description'>
              Last seen watching{' '}
              <a>
                <b>Bob's Burgers</b>
              </a>{' '}
              10 hours ago.
            </div>
          </div>
        </div>
        <div class='item'>
          <img
            class='ui avatar image'
            src='/images/avatar2/small/matthew.png'
          />
          <div class='content'>
            <a class='header'>Matthew</a>
            <div class='description'>
              Last seen watching{' '}
              <a>
                <b>The Godfather Part 2</b>
              </a>{' '}
              yesterday.
            </div>
          </div>
        </div>
        <div class='item'>
          <img class='ui avatar image' src='/images/avatar/small/jenny.jpg' />
          <div class='content'>
            <a class='header'>Jenny Hess</a>
            <div class='description'>
              Last seen watching{' '}
              <a>
                <b>Twin Peaks</b>
              </a>{' '}
              3 days ago.
            </div>
          </div>
        </div>
        <div class='item'>
          <img
            class='ui avatar image'
            src='/images/avatar/small/veronika.jpg'
          />
          <div class='content'>
            <a class='header'>Veronika Ossi</a>
            <div class='description'>Has not watched anything recently</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
