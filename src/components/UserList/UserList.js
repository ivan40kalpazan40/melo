import { useEffect, useState } from 'react';
import { useAuth } from '../../context/Auth/AuthState';
import * as authServices from '../../services/authServices';
const UserList = () => {
  const [users, setUsers] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    authServices.getAllUsers().then((res) => setUsers(res));
  }, []);
  return (
    <div className='ui container'>
      <h1>User List</h1>
      {users.length > 0 ? (
        <div className='ui middle aligned divided list'>
          {users
            .filter((x) => x._id !== user._id)
            .map((contact) => (
              <div className='item' key={contact._id}>
                <div className='right floated content'>
                  <div className='ui button'>Add</div>
                </div>
                <img className='ui avatar image' src={contact.image} />
                <div className='content'>{contact.username}</div>
              </div>
            ))}
        </div>
      ) : (
        'No users available'
      )}
    </div>
  );
};

export default UserList;
