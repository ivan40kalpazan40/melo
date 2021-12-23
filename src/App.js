import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Artists from './components/Artists';
import UserList from './components/UserList';
import Details from './components/Details';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Contacts from './components/Contacts';
import Followers from './components/Followers';
import Collection from './components/Collection';
import Edit from './components/Edit';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';

import { DataProvider } from './context/Data/DataState';
import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <Navbar />
      <DataProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/artists' element={<Artists />} />
          <Route path='/artists/:id/details' element={<Details />} />
          <Route path='/user' element={<UserList />} />
          <Route path='/user/login' element={<Login />} />
          <Route path='/user/register' element={<Register />} />
          <Route path='/user/logout' element={<Logout />} />
          <Route path='/user/:userId/profile' element={<Profile />} />
          <Route path='/user/:userId/contacts' element={<Contacts />} />
          <Route path='/user/:userId/followers' element={<Followers />} />
          <Route path='/user/:userId/collection' element={<Collection />} />
          <Route path='/user/:userId/edit' element={<Edit />} />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
