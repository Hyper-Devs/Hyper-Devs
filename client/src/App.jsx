import './App.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Database from './Pages/Database/Database';
import Enroll from './Pages/Enroll/Enroll';
import Notification from './Pages/Notification/Notification';
import Override from './Pages/Override/Override';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            exact path='/'
            element={<Login/>}
          />
          <Route
            path='/dashboard'
            element={<Dashboard/>}
          />
          <Route
            path='/home'
            element={<Home/>}
          />
          <Route
            path='/database'
            element={<Database/>}
          />
          <Route
            path='/enroll'
            element={<Enroll/>}
          />
          <Route
            path='/notification'
            element={<Notification/>}
          />
          <Route
            path='/override'
            element={<Override/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App