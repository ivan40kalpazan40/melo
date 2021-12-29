import { useEffect, useState } from 'react/cjs/react.development';
import { useAuth } from '../../context/Auth/AuthState';
import * as authServices from '../../services/authServices';

const UserListItem = ({ contact }) => {
  const { user } = useAuth();
  const [isFriend, setIsFriend] = useState(false);
  useEffect(() => {
    console.log('a friend?  ', isFriend);
    console.log(`USER:`, user);
    console.log(`CONTACT:`, contact);
    if (user.contacts.some((x) => x._id == contact._id)) {
      setIsFriend(true);
    } else {
      setIsFriend(false);
    }
  }, []);
  const followToggleHandler = async (e) => {
    const currentContactId = e.target.getAttribute('value');

    authServices
      .followToggle(user._id, currentContactId)
      .then((res) => {
        if (!res.ok) throw new Error(res.message);
        setIsFriend(!isFriend);
      })
      .catch((error) => {
        console.log(error.message);
      });
    // if (!isFriend) {
    //   authServices.followUser(user._id, currentContactId).then((res) => {
    //     if (res.ok) {
    //       setIsFriend(true);
    //     }
    //   });
    // } else {
    //   console.log('Unfollow');
    //   authServices
    // }
  };
  return (
    <div className='item'>
      <div className='right floated content'>
        <div
          className='ui button'
          value={contact._id}
          onClick={followToggleHandler}
        >
          {isFriend ? 'Unfollow' : 'Follow'}
        </div>
      </div>
      <img className='ui avatar image' src={contact.image} />
      <div className='content'>{contact.username}</div>
    </div>
  );
};

export default UserListItem;
