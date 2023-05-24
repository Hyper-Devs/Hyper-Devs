import React, { useState } from 'react';
import './Header2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BsPerson } from 'react-icons/bs';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineLeft } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Header2() {

  const [oldPassword, setoldPassword] = useState('')
  const [newPassword, setnewPassword] = useState('')

  const handleLogoutClick = () => {
    localStorage.clear();
    window.location.replace("/");
  };


  const onSubmit = async e =>{
    e.preventDefault();
    const data = { newPassword, oldPassword };
    fetch('http://localhost:8800/database/update-password',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)

    }).then(res =>{
      if(res.ok){
        console.log("Password updated successfully!")
      } else {
        console.log("Failed to update Password!")
      }
    }).catch(err =>{
      console.log("Error updating password: ", err)
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
              Noreen M.
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
              <AiOutlineLeft className="AiOutlineLeft" />
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

          <div class="modal fade" id="AccSettModal" tabindex="-1" aria-labelledby="AccSettModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 text-light" id="AccSettModalLabel">Account Settings</h1>
                    <button type="button" class="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div className="row">
                        <div className="col text-center"></div>'
                        <div className="row-4">
                            <img class = "mx-auto d-block" src="icons/Profile Icon.svg" alt="Profile Icon" srcSet="" />
                        </div>
                        <div className="row text-center"> <h3>Norren Mercado</h3></div>
                        <div className="row text-center"> <h5>Secretary</h5></div>
                        <div className="row px-5"> 
                            <div className="col-4 p-2 rounded-start bg-success text-center text-light">Access Type</div>
                            <div className="col p-2 border rounded-end"></div>
                        </div>
                        <div className="row px-5 pt-3">
                        <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#ChangePassCollapse" aria-expanded="false" aria-controls="ChangePassCollapse">
                            Change Password
                        </button>
                        <div class="collapse pt-1 p-0" id="ChangePassCollapse">
                            <div class="card card-body">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="old-pass">
                                <img class = "mx-auto d-block" src="Assets/Vectors/Key.png" alt="Key Icon" srcSet="" />
                                </span>
                                <input type="text" class="form-control" placeholder="Enter Current Password" aria-label="OldPass" aria-describedby="old-pass" 
                                onChange={e => setoldPassword(e.target.value)}></input>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="new-pass">
                                <img class = "mx-auto d-block" src="/Vectors/Key.png" alt="Key Icon" srcSet="" />
                                </span>
                                <input type="text" class="form-control" placeholder="Enter New Password" aria-label="NewPass" aria-describedby="new-pass" 
                                onChange={e => setnewPassword(e.target.value)}></input>
                            </div>
                            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#ChangePassModal" onClick={onSubmit}>
                            Save Changes
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
            <div class="modal fade" id="ChangePassModal" tabindex="-1" aria-labelledby="ChangePassModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header bg-success">
                    <h1 class="modal-title fs-5 text-light " id="ChangePassModalLabel">Change Password</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                Password successfully changed!
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
    </div>
  );
}

export default Header2;
