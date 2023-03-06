import './App.css';
import React, { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';

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
            path='/calc'
            element={<Dashboard/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App