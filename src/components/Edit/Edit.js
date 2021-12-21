import { useAuth } from '../../context/Auth/AuthState';
import { useNavigate } from 'react-router-dom';
import * as authServices from '../../services/authServices';
const Edit = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { username, email, location, image } = user;
  const submitEditProfile = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const location = formData.get('location');
    const image = formData.get('image');
    authServices
      .editUser(user._id, email, location, image)
      .then((res) => {
        if (!res.ok) throw new Error(res.message);
        // getUpdated User
        // redirect
        navigate(`/user/${user._id}/profile`);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className='ui container'>
      <h1>Edit</h1>
      <h4>{username}</h4>
      <form className='ui form' method='POST' onSubmit={submitEditProfile}>
        <div className='field'>
          <label>Email</label>
          <input type='email' name='email' defaultValue={email} />
        </div>
        <div className='field'>
          <label>Add Location</label>
          <input type='text' name='location' defaultValue={location} />
        </div>
        <div className='field'>
          <label>Profile Picture URL</label>
          <input type='text' name='image' defaultValue={image} />
        </div>

        <button className='ui button black' type='submit'>
          Edit
        </button>
      </form>
    </div>
  );
};

export default Edit;
