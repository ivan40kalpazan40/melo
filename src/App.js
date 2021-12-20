import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Artists from './components/Artists';
import Details from './components/Details';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
          <Route path='/user/login' element={<Login />} />
          <Route path='/user/register' element={<Register />} />
          <Route path='/user/logout' element={<Logout />} />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
