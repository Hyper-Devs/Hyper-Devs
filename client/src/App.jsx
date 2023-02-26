import './App.css';
import React, { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './Pages/Landing/Landing';
import Calculator from './Pages/Calculator/Calculator';

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
            path='/calc'
            element={<Calculator/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App