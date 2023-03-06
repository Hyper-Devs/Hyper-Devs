import React, { useState } from 'react'
import './Login.css'

function Login() {
  return (
    <div className='backgroundImage'>
    <form>
      <div className='formContainer'>
        <h3>UNIVERSITY OF THE PHILIPPINES CEBU HIGH SCHOOL</h3>
        <div className='formInner'>
          <label>ID Number</label>
          <input type="text" name='idNumber' id='idNumber'/>
          <label>Password:</label>
          <input type="password" name="password" id="password" />
          <button>Login</button>
          </div>
      </div>
    </form>
    </div>

  );
}

export default Login