import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user/login' element={<Login />} />
        <Route path='/user/register' element={<Register />} />
        <Route path='/user/logout' element={<Logout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
