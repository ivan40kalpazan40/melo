import { Link } from 'react-router-dom';
const ContactItem = ({ contact, user }) => {
  return (
    <div className='item' key={contact._id}>
      <img className='ui avatar image' src={contact.image} />
      <div className='content'>
        <Link
          to={`/user/${user._id}/contacts/${contact._id}`}
          className='header'
        >
          {contact.username}
        </Link>
      </div>
    </div>
  );
};

export default ContactItem;
