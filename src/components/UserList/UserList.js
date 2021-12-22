import { useEffect, useState } from 'react';
import { useAuth } from '../../context/Auth/AuthState';
import * as authServices from '../../services/authServices';
import UserListItem from './UserListItem';
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
              <UserListItem contact={contact} key={contact._id} />
            ))}
        </div>
      ) : (
        'No users available'
      )}
    </div>
  );
};

export default UserList;
