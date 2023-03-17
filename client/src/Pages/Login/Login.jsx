import React, { useState } from "react";
import "./Login.css";
import Footer from '../../Components/footer'

function Login() {
  return (
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
            <input className="IDnum" type="text" />
            <label>Password</label>
            <input className="Passw" type="password" />
            <button className="login-button">Login</button>
            <a href="#">Forgot Password?</a>
          </form>
        </div>
      </div>
      {/*<Footer/>*/}
    </div>
  );
}

export default Login;
