import './App.css';
import React, { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './Pages/Landing/Landing';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            exact path='/'
            element={<Landing/>}
          />
          <Route
            path='/dashboard'
            element={<Dashboard/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App