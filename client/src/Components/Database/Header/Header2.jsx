import React, { useState, useEffect } from 'react';
import './Header2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BsPerson } from 'react-icons/bs';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { FiLogOut } from 'react-icons/fi';
import { FiKey } from 'react-icons/fi';
import { FiSettings } from 'react-icons/fi';
import { FiUpload } from 'react-icons/fi';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { Buffer } from 'buffer';
import KeyIcon from '@mui/icons-material/Key';

import api from '../../../api/api';

function Header2() {

  const [oldPassword, setoldPassword] = useState('')
  const [newPassword, setnewPassword] = useState('')
  const [access_id, setaccess_id] = useState('')
  const [message, setmessage] = useState('')
  const [userData, setUserData] = useState({});
  const [token, setToken] = useState('');
  const [base64Avatar, setbase64Avatar] = useState(null);
  const [formattedName, setformattedName] = useState('');
  const [selectedFile, setSelectedFile] = useState('');

  const handleLogoutClick = () => {
    localStorage.removeItem("accessToken");
    setUserData({});
    window.location.replace("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setToken(token);
      const decodedToken = jwt_decode(token);
      const id = decodedToken.AccessID;
      setaccess_id(id);
      api.get(`/database/get-user/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        },
      })
      .then((res) => {
        setUserData(res.data);
        const nameArray = res.data.name.split(" ");
        const lastName = nameArray[nameArray.length - 1];
        const firstInitial = nameArray[0].charAt(0);
        const formattedName = `${lastName}, ${firstInitial}.`;
        setformattedName(formattedName);

        if (res.data.avatar) {
          const buffer = Buffer.from(res.data.avatar)
          const base64Avatar = buffer.toString('base64')
          setbase64Avatar(base64Avatar);
        }
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
    api.fetch('/database/update-password',{
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

  // const handleProfilePictureUpload = async () => {
  //   if (!selectedFile) {
  //     return;
  //   }
  //   const reader = new FileReader();
  //   reader.readAsArrayBuffer(selectedFile);
  //   reader.onload = async () => {
  //     const buffer = Buffer.from(reader.result)
  //     const uint8Array = new Uint8Array(buffer);
  //     try {
  //       const response = await api.post(`/upload/${access_id}`, {
  //         avatar: uint8Array,
  //       }, {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Authorization': `Bearer ${token}`
  //         },
  //       });
  //       console.log(response.data);
  //       setbase64Avatar(`data:${selectedFile.type};base64,${buffer.toString('base64')}`);
  //       setSelectedFile(null);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  // };



  const handleProfilePictureUpload = async () => {
    if (!selectedFile) {
      return;
    }

      // check if selected file is an image
    if (!selectedFile.type.startsWith('image/') || selectedFile.type === 'image/gif') {
      setmessage('Uploaded file must be an image (.png, .jpg, .jpeg)');
      return;
    }
  
    const formData = new FormData();
    formData.append('avatar', selectedFile);
    console.log("hey")
    try {
      const response = await api.post(`/database/upload/${access_id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        },
      });
      // console.log(response.data);
      setbase64Avatar(URL.createObjectURL(selectedFile));
      setmessage("Profile Updated Succesfully. Please refresh the page.")
      setSelectedFile('');
    } catch (error) {
      setmessage("Profile Upload Failed. Please try again.")
      console.error(error);
    }
  };

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
              {formattedName || "User"}
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
              {/* New change ? */}
              <FiSettings className="FiSettings" style={{marginLeft: "-4px", marginRight: "4px"}}/>
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
                            <img className = "mx-auto d-block avatar" 
                              src={ base64Avatar ? `data:${selectedFile.type};base64,${base64Avatar}` : "icons/Profile Icon.svg"} alt="Profile Icon" />
                        </div>
                        <div className="row text-center"> <h3>{userData.name || "User"}</h3></div>
                        <div className="row text-center"> <h5>{userData.position || "Position"}</h5></div>
                        
                        <div className="row pt-1 ps-5"> 
                            <div className="col-4 p-2 rounded-start bg-warning text-center ">Access Type</div>
                            <div className="col p-2 me-4 border border-warning bg-warning bg-opacity-10 rounded-end text-center">{userData.role || "Role"}</div>
                        </div>
                        
                        <div className="row pt-1 ps-5 ">
                          <div className="row">
                          <button className="btn btn-success mb-1" type="button" data-bs-toggle="collapse" data-bs-target="#ChangePassCollapse" aria-expanded="false" aria-controls="ChangePassCollapse">
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <KeyIcon style={{ marginRight: '0.5rem', alignSelf: 'flex-start' }} />
                            <span style={{ marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>Change Password</span>
                          </div>
                        </button>

                            <div className="collapse pt-1 p-0 mb-3" id="ChangePassCollapse">
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

                          {/* Profile Picture */}
                          <div className="row">
                            <button className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#changePPCollapse" aria-expanded="false" aria-controls="changePPCollapse">
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                              <FiUpload style={{ marginRight: '0.5rem', alignSelf: 'flex-start' }} />
                              <span style={{ marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>Change Profile Picture</span>
                            </div>
                            </button>
                              <div className="collapse pt-1 p-0" id="changePPCollapse">
                                <div className="card card-body">
                                <div className="row px-3">
                                  <label for="formFile" className="form-label"></label>
                                  <input className="form-control" type="file" id="formFile" onChange={(e) => setSelectedFile(e.target.files[0])} accept='.png, .jpg, .jpeg'/>
                                  <button className = "btn btn-success mt-2 mb-10 px-3 p-1" onClick={handleProfilePictureUpload} data-bs-toggle='modal' data-bs-target='#ChangePassModal'>Upload</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          
                          {/* <input
                            type="file"
                            id="profile-picture-input"
                            style={{ display: "none" }}
                            onChange={(e) => setSelectedFile(e.target.files[0])}
                            accept='.png, .jpg, .jpeg'
                          /> */}


                        </div>

                    </div>
                </div>
                <div className="modal-footer bg-danger bg-opacity-10">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
            <div className="modal fade" id="ChangePassModal" tabIndex="-1" aria-labelledby="ChangePassModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header bg-success">
                    <h1 className="modal-title fs-5 text-light " id="ChangePassModalLabel">Account Settings</h1>
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
