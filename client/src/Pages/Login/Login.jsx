import React, { useState } from "react";
import "./Login.css";
import Footer from '../../Components/footer'
import {FiHash} from 'react-icons/fi'
import {FiKey} from 'react-icons/fi'
import {FiLogIn} from 'react-icons/fi'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

function Login() {

  const [login_id, setLogin_id] = useState('')
  const [login_password, setLogin_password] = useState('')
  const [authStatus, setAuthStatus] = useState(false)

  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios.get('http://localhost:8800/', {
                params : {
                  login_id, 
                  login_password,
                }
              })
    .then(res => {console.log(res);

    if(res.status == 202){setAuthStatus(true);
    navigate('/dashboard');}
    else if(res.status == 201){setAuthStatus(true)}})
    .catch(err => console.log(err));

    // Read the form data
    // const form = e.target;
    // const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    //fetch('/some-api', { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    // const formJson = Object.fromEntries(formData.entries());


    // console.log(formJson);
    // console.log(formJson['login-id']);

    // authUser(formJson);
  }

  // const authUser = async (dataObs) => {
  //     var login_id = dataObs['login-id'];
  //     var login_password = dataObs['login-password'];

  //     try {
  //         const result = await axios.get(`http://localhost:8800/`, {
  //           params : {
  //             login_id, 
  //             login_password,
  //           }
  //         });
          
  //         // console.log(result)
  //         setAuthStatus(false);
  //         if(result.status == 201){setAuthStatus(true);}
          
  //     } catch (err) {
  //         console.log(err);
  //     }
  // };


  return (
    <body id="login-page" data-testid="login-test">
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
                  <div className="login-input-icons"><FiHash size={"1.5rem"} color="#7A1315"/></div>
                  <input name='login-id' type="text"
                  onChange={e => setLogin_id(e.target.value)}/>
                </div>

                <label>Password</label>
                <div className="login-input-container">
                <div className="login-input-icons"><FiKey size={"1.5rem"} color="#7A1315"/></div>
                  <input name='login-password' type="password" 
                  onChange={e => setLogin_password(e.target.value)}/>
                </div>

                {authStatus && <p style={{color: 'red'}}>Access ID or password is incorrect</p>}
                <div className="login-button">
                <div className="login-input-icons"><FiLogIn size={"1.5rem"} color="#7A1315"/></div>
                  <button type='submit'>Login</button>
                </div>
                
                
                <a className={'forgotPassword'} href="#">Forgot Password?</a>
              </form>
            </div>
          </div>
          </div>
        </div>
        <div className="login-footer">
        <Footer />
        </div>
      </div>
    </body>
  );
}

export default Login;
