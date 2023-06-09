import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { SidebarData } from "./SidebarData"
import { Buffer } from 'buffer';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import api from "../../api/api"

function NewSidebar() {

  const [access_id, setaccess_id] = useState('')
  const [token, setToken] = useState('');
  const [base64Avatar, setbase64Avatar] = useState(null);

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

  return (
    <div className='newsidebar-container'>
      <div className='newsidebar-content'>
      <div className='newsidebar-header'>
        <img className='avatar' src={ base64Avatar ? `data:image/png;base64,${base64Avatar}` : "icons/Profile Icon.svg"} alt="Profile Icon" />
      </div>
      <ul className='sidebar-list'>
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className='items'
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link
              }}
            >
              <div id='icon'>{val.icon}</div> <div id='title'>{val.title}</div>
            </li>
          );
        })}
      </ul>
      </div>
    </div >
  );
}

export default NewSidebar;