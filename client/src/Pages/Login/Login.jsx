import React, { useState } from "react";
import "./Login.css";
import Footer from '../../Components/footer'
import {FiHash} from 'react-icons/fi'
import {FiKey} from 'react-icons/fi'
import {FiLogIn} from 'react-icons/fi'

function Login() {
  return (
    <div className="login-container">
      <div className="inner-container">
      <div className="title">
        <h2>University of the Philippines Cebu High School</h2>
        <h1>Gate Access Notification System</h1>
      </div>
      <div className="form-container">
        <div className="login-bgi"></div>
        <div className="upcLogo"></div>
        <div className="loginForm">
          <form>
            <label>ID Number</label>
            <div className="login-input-icons"><FiHash color="#7A1315"/></div>
            <input className="IDnum" type="text" />
            <label>Password</label>
            <div className="login-input-icons"><FiKey color="#7A1315"/></div>
            <input className="Passw" type="password" />
            <button className="login-button"><div className="login-icon"><FiLogIn color="#7A1315"/></div>Login</button>
            <a href="#">Forgot Password?</a>
          </form>
        </div>
      </div>
      </div>
      <Footer />
    </div>

  );
}

export default Login;
