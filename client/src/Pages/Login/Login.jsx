import React, { useState } from "react";
import "./Login.css";
import Footer from '../../Components/footer'

function Login() {
  return (
    <div className="login-container">
      <div className="container">
        <div className="upcLogo"></div>
        <div className="formTitle">
          <h3>UNIVERSITY OF THE PHILIPPINES</h3>
        </div>
        <div>
          <h3>CEBU HIGH SCHOOL</h3>
        </div>
        <form className="loginForm">
          <div className="inputField">
            <label>ID Number</label>
            <input type="text" />
          </div>
          <div className="inputField">
            <label>Password</label>
            <input type="password" />
          </div>
          <button>Login</button>
          <a href="#">Forgot Password?</a>
        </form>
      </div>
      <div className="title">
        <h1>Gate Access System</h1>
        <h2>Access • Track • Notify • Alert • Override</h2>
      </div>
      <Footer/>
    </div>
  );
}

export default Login;
