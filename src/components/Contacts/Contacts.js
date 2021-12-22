import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Auth/AuthState';
import * as authServices from '../../services/authServices';
const Contacts = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    authServices
      .getUserContacts(user._id)
      .then((res) => console.log(`Finally contacts: `, res))
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
        <div className='item'>
          <img className='ui avatar image' src={user.image} />
          <div className='content'>
            <a className='header'>Rachel</a>
            <div className='description'>
              Last seen watching{' '}
              <a>
                <b>Arrested Development</b>
              </a>{' '}
              just now.
            </div>
          </div>
        </div>
        <div className='item'>
          <img className='ui avatar image' src={user.image} />
          <div className='content'>
            <a className='header'>Lindsay</a>
            <div className='description'>
              Last seen watching{' '}
              <a>
                <b>Bob's Burgers</b>
              </a>{' '}
              10 hours ago.
            </div>
          </div>
        </div>
        <div className='item'>
          <img
            className='ui avatar image'
            src='/images/avatar2/small/matthew.png'
          />
          <div className='content'>
            <a className='header'>Matthew</a>
            <div className='description'>
              Last seen watching{' '}
              <a>
                <b>The Godfather Part 2</b>
              </a>{' '}
              yesterday.
            </div>
          </div>
        </div>
        <div className='item'>
          <img
            className='ui avatar image'
            src='/images/avatar/small/jenny.jpg'
          />
          <div className='content'>
            <a className='header'>Jenny Hess</a>
            <div className='description'>
              Last seen watching{' '}
              <a>
                <b>Twin Peaks</b>
              </a>{' '}
              3 days ago.
            </div>
          </div>
        </div>
        <div className='item'>
          <img
            className='ui avatar image'
            src='/images/avatar/small/veronika.jpg'
          />
          <div className='content'>
            <a className='header'>Veronika Ossi</a>
            <div className='description'>Has not watched anything recently</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
