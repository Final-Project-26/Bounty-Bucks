import './App.css';
import Home from './pages/Home';
import Daos from './pages/Daos';
import Bounties from './pages/Bounties';
import ListBounty from './components/ListBounty'
import Profile from './pages/Profile'
import { useState } from 'react';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='absolute w-full h-full z-1 top-0'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/daos' element={<Daos />} />
        <Route path='/bounties' element={<Bounties />} />
        <Route path="/list-bounty" element={<ListBounty />}/>   
        <Route path="/profile" element={<Profile />}/>           
      </Routes>
    </div>
  );
}

export default App;
