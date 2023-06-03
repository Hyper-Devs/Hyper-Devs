import React, { useState, useEffect } from 'react';
import './Header2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BsPerson } from 'react-icons/bs';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { FiLogOut } from 'react-icons/fi';
import { FiKey } from 'react-icons/fi';
import { FiSettings } from 'react-icons/fi';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

function Header2() {

  const [oldPassword, setoldPassword] = useState('')
  const [newPassword, setnewPassword] = useState('')
  const [access_id, setaccess_id] = useState('')
  const [message, setmessage] = useState('')
  const [userData, setUserData] = useState({});
  const [token, setToken] = useState('');

  const handleLogoutClick = () => {
    // localStorage.removeItem("isLoggedin");
    localStorage.removeItem("accessToken");
    window.location.replace("/");
  };


  // useEffect(() => {
  //   const user = localStorage.getItem("isLoggedin");
  //   const userID = JSON.parse(user)
  //   if (user) {
  //     const id = userID[0].access_id
  //     setaccess_id(id);

  //     axios.get(`http://localhost:8800/database/get-user/${id}`)
  //     .then((res) => {
  //       setUserData(res.data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  //   }
  // }, []);


  // const onSubmit = async e =>{
  //   e.preventDefault();
  //   if (newPassword.length < 8){
  //     setmessage("Password must at leastb be 8 characters long!")
  //     return
  //   }
  //   const passwordRegex =/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  //   if (!passwordRegex.test(newPassword)) {
  //   setmessage("Password must contain at least one uppercase letter, one lowercase letter, and one digit.");
  //   return
  // }
  //   const data = { newPassword, oldPassword, access_id };
  //   fetch('http://localhost:8800/database/update-password',{
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data)

  //   }).then(res =>{
  //     if(res.ok){
  //       console.log("Password updated successfully!")
  //       setmessage("Password updated succesfully!")
  //     } else if (res.status === 401)  {
  //       console.log("Old password does not match! Try again.")
  //       setmessage("Old password does not match! Try again.")
  //     } else {
  //       console.log("Password update failed!")
  //       setmessage("Password update failed!")
  //     }

  //   }).catch(err =>{
  //     console.log("Error updating password! ")
  //     setmessage("Internal Error occured. Refresh the page.")
  //   });
  // }

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setToken(token);
      const decodedToken = jwt_decode(token);
      const id = decodedToken.AccessID;
      setaccess_id(id);
      axios.get(`http://localhost:8800/database/get-user/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
    }
  }, []);

  const onSubmit = async e =>{
    e.preventDefault();
    if (newPassword.length < 8){
      setmessage("Password must at least be 8 characters long!")
      return
    }
    const passwordRegex =/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    if (!passwordRegex.test(newPassword)) {
    setmessage("Password must contain at least one uppercase letter, one lowercase letter, and one digit.");
    return
    }
    const data = { newPassword, oldPassword, access_id };
    fetch('http://localhost:8800/database/update-password',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)

    }).then(res =>{
      if(res.ok){
        console.log("Password updated successfully!")
        setmessage("Password updated succesfully!")
      } else if (res.status === 401)  {
        console.log("Old password does not match! Try again.")
        setmessage("Old password does not match! Try again.")
      } else {
        console.log("Password update failed!")
        setmessage("Password update failed!")
      }

    }).catch(err =>{
      console.log("Error updating password! ")
      setmessage("Internal Error occured. Refresh the page.")
    });
  }


  return (
    <div className="header2-container">
      <div className="title-container">
        UPHS Gate Access Notification System
      </div>
      <div className="btn-group">
        <button
          className="btn btn-light dropdown-toggle"
          type="button"
          aria-label="Dropdown-Menu"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <BsPerson size="30px" />
        </button>
        <ul className="dropdown-menu" data-testid="dropdown-menu">
          <li>
            <div className="profile-name" data-testid="profile-button">
              <IoPersonCircleSharp className="IoPersonCircleSharp" size={"22px"} />
              {userData.name || "User"}
            </div>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              aria-label="account-setting"
              data-bs-toggle="modal"
              data-bs-target="#AccSettModal" 
            >
              <FiSettings className="FiSettings" />
              Account Settings
            </button>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={handleLogoutClick}
              aria-label="ddLogoutButton"
            >
              <FiLogOut className="FiLogOut" />
              Logout
            </button>
          </li>
        </ul>
      </div>

          <div className="modal fade" id="AccSettModal" tabIndex="-1" aria-labelledby="AccSettModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5 text-light" id="AccSettModalLabel">Account Settings</h1>
                    <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col text-center"></div>'
                        <div className="row-4">
                            <img className = "mx-auto d-block" src="icons/Profile Icon.svg" alt="Profile Icon" srcSet="" />
                        </div>
                        <div className="row text-center"> <h3>{userData.name || "User"}</h3></div>
                        <div className="row text-center"> <h5>{userData.position || "Position"}</h5></div>
                        <div className="row px-5"> 
                            <div className="col-4 p-2 rounded-start bg-success text-center text-light">Access Type</div>
                            <div className="col p-2 border rounded-end">{userData.role || "Role"}</div>
                        </div>
                        <div className="row px-5 pt-3">
                        <button className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#ChangePassCollapse" aria-expanded="false" aria-controls="ChangePassCollapse">
                            Change Password
                        </button>
                        <div className="collapse pt-1 p-0" id="ChangePassCollapse">
                            <div className="card card-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="old-pass">
                                <FiKey className = "mx-auto d-block"/>
                                </span>
                                <input type="password" className="form-control" placeholder="Enter Current Password" aria-label="OldPass" aria-describedby="old-pass" 
                                onChange={e => setoldPassword(e.target.value)}></input>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="new-pass">
                                <FiKey className = "mx-auto d-block"/>
                                </span>
                                <input type="password" className="form-control" placeholder="Enter New Password" aria-label="NewPass" aria-describedby="new-pass" 
                                onChange={e => setnewPassword(e.target.value)}></input>
                            </div>
                            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#ChangePassModal" onClick={onSubmit}>
                            Save Changes
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
            <div className="modal fade" id="ChangePassModal" tabIndex="-1" aria-labelledby="ChangePassModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header bg-success">
                    <h1 className="modal-title fs-5 text-light " id="ChangePassModalLabel">Change Password</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                {message}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
    </div>
  );
}

export default Header2;
