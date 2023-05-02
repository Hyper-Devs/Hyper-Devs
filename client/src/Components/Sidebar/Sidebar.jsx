import React from 'react'
import './Sidebar.css';
import { SidebarData } from "./SidebarData"

function NewSidebar() {
  return (
    <div className='newsidebar-container'>
      <div className='newsidebar-header'>
        <img src="icons/Profile Icon.svg" alt="" srcset="" />
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
    </div >
  );
}

export default NewSidebar;