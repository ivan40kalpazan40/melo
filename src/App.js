import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <Navbar />
      <Routes>
        <Route path='/user/login' element={<Login />} />
        <Route path='/user/register' element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
