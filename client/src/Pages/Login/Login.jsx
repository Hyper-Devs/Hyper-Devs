import React, { useState } from "react";
import "./Login.css";
import Footer from '../../Components/footer'
import {FiHash} from 'react-icons/fi'
import {FiKey} from 'react-icons/fi'
import {FiLogIn} from 'react-icons/fi'

function Login() {
  return (
    <body id="login-page">
    <div className="login-content">
    <div className="login-container">
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
            <div className="login-input-container">
            <FiHash className="login-input-icon" color="#7A1315" size="1.2rem"/><input className="IDnum" type="text" />
            </div>
            <label>Password</label>
            <div className="login-input-container">
            <FiKey className="login-input-icon" color="#7A1315" size="1.2rem"/><input className="Passw" type="password" />
            </div>
            <div className="login-button">
            <FiLogIn className="login-icon" color="#7A1315" size="1.1rem"/><button>Login</button>
            </div>
            <a href="#">Forgot Password?</a>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </div>
    </body>
  );
}

export default Login;
