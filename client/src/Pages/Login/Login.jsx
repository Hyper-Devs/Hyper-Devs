import React, { useState, useEffect } from "react";
import "./Login.css";
import Footer from '../../Components/footer'
import { FiHash } from 'react-icons/fi'
import { FiKey } from 'react-icons/fi'
import { FiLogIn } from 'react-icons/fi'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function Login() {

  const [login_id, setLogin_id] = useState('')
  const [login_password, setLogin_password] = useState('')
  const [authStatus, setAuthStatus] = useState(false)
  const [user, setUser] = useState()


  // Checks if there is a user session that is stored in the local storage that did not logout
  // If there is, set it as the current user
  useEffect(() => {
    const loggedInUser = localStorage.getItem("isLoggedin");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    const user = { login_id, login_password };
    await axios.get('http://localhost:8800/', {
      params: {
        login_id,
        login_password,
      }
    }, user)
      .then(res => {
        // console.log(res);

        if (res.status === 202) {
          setAuthStatus(true);

          // Store current user session in the local storage to allow login persistence
          setUser(res.data)
          localStorage.setItem("isLoggedin", JSON.stringify(res.data));
          console.log(res.data)
        }
        else if (res.status === 201) { setAuthStatus(true) }
      })
      .catch(err => console.log(err))
  }


  // If a user is already logged in, redirect the user to the dashboard
  // To access the login page, and login a separate user, the current user must first logout, otherwise it will just be redirected to the dashboard
  if (user) {
    window.location.replace('/dashboard')
  }


  return (
    <div id="login-page" data-testid="login-test">
      <div className="login-content">
        <div className="login-container">
          <div className="title">
            <h2>University of the Philippines Cebu High School</h2>
            <h1>Gate Access Notification System</h1>
          </div>

          <div className="form-container" data-testid="login-form">
            <div className="login-bgi">

              <div className="upcLogo"></div>

              <div className="loginForm">
                <form className='login-field' onSubmit={handleSubmit}>

                  <label data-testid="id-field">ID Number</label>
                  <div className="login-input-container">
                    <div className="login-input-icons"><FiHash size={"1.5rem"} color="#7A1315" /></div>
                    <input name='login-id' type="text" data-testid="username-field"
                      onChange={e => setLogin_id(e.target.value)} />
                  </div>

                  <label>Password</label>
                  <div className="login-input-container">
                    <div className="login-input-icons"><FiKey size={"1.5rem"} color="#7A1315" /></div>
                    <input name='login-password' type="password" data-testid="password-field"
                      onChange={e => setLogin_password(e.target.value)} />
                  </div>

                  {authStatus && <p style={{ color: 'red' }}>Access ID or password is incorrect</p>}
                  <div className="login-button">
                    <div className="login-input-icons"><FiLogIn size={"1.5rem"} color="#7A1315" /></div>
                    <button type='submit'>Login</button>
                  </div>


                  <a className={'forgotPassword'} href="#">Forgot Password?</a>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Login;
