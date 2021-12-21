import { useEffect, useState } from 'react';
import * as authServices from '../../services/authServices';
const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    authServices.getAllUsers().then((res) => setUsers(res));
  }, []);
  return (
    <div className='ui container'>
      <h1>User List</h1>
      {users.length > 0 ? (
        <div class='ui middle aligned divided list'>
          {users.map((user) => (
            <div class='item' key={user._id}>
              <div class='right floated content'>
                <div class='ui button'>Add</div>
              </div>
              <img class='ui avatar image' src={user.image} />
              <div class='content'>{user.username}</div>
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
