import React, { useState } from "react";
import "./Login.css";
/*import Footer from "../../Components/footer";*/

function Login() {
  return (
    <div className="login-container">
      <div className="form-container">
        <div className="upcLogo"></div>
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
        <h2>University of the Philippines Cebu High School</h2>
        <h1>Gate Access Notification System</h1>
      </div>
      {/*<Footer />*/}
    </div>
  );
}

export default Login;
